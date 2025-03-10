const { test, after, describe, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const assert = require('node:assert')
const api = supertest(app)
const Blog = require('../models/blog')
const helper = require('./test_helper')

const initialBlog = [
    {
        title: "test1",
        author: "tester1",
        url: "test.com",
        likes: 25
    },
    {
        title: "test2",
        author: "tester2",
        url: "test2.com",
        likes: 15
    },
    {
        title: "test3",
        author: "tester3",
        url: "test3.com",
        likes: 10
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})

    for (let blog of initialBlog) {
        let blogObject = new Blog(blog)

        await blogObject.save()
    }
})


test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('checking how many blogs there are', async () => {
    const response = await api.get('/api/blogs')
    assert.strictEqual(response.body.length, 3)
})

test('check if the id name is correct', async () => {
    const response = await api.get('/api/blogs')

    if (response.body.length > 0) {
        const blog = response.body[0]

        assert.ok(blog.id, 'id property shouild exist')
        assert.strictEqual(blog._id, undefined, '_id should be undefined')
    }
})

test('a valid blog can be added', async () => {
    const newBlog =
    {
        title: "Added1",
        author: "add1",
        url: "add.com",
        likes: 123
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const titles = response.body.map(r => r.title)

    assert.strictEqual(response.body.length, initialBlog.length + 1)

    assert(titles.includes('Added1'))
})

describe('deletion of a blog', () => {
    test('succeeds with status code 204 if id is valid', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToDelete = blogsAtStart[0]

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .expect(204)

        const blogsAtEnd = await helper.blogsInDb()

        assert.strictEqual(blogsAtEnd.length, initialBlog.length - 1)

        const titles = blogsAtEnd.map(r => r.title)
        assert(!titles.includes(blogToDelete.title))
    })
})

describe('updating of a blog', () => {
    test('succeded updating blog', async () => {
        const blogsAtStart = await helper.blogsInDb()
        const blogToUpdate = blogsAtStart[0]

        //console.log(blogToUpdate)
        const blog = {
            title: "updated",
            author: "updatedAuthor",
            url: "updated",
            likes: 200
        }

        await api
            .put(`/api/blogs/${blogToUpdate.id}`)
            .send(blog)
        
        const blogsAtEnd = await helper.blogsInDb()

        const titles = blogsAtEnd.find(b => b.id === blogToUpdate.id)

        assert(titles.title.includes(blog.title))
        assert(titles.likes === blog.likes)
    })
})

after(async () => {
    await mongoose.connection.close()
})