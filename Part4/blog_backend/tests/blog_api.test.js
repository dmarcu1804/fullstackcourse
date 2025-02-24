const { test, after, beforeEach } = require('node:test')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const assert = require('node:assert')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlog = [
    {
        title: "test1",
        author: "tester1",
        url: "test.com",
        likes:25
    },
    {
        title: "test2",
        author: "tester2",
        url: "test2.com",
        likes:15
    },
    {
        title: "test3",
        author: "tester3",
        url: "test3.com",
        likes:10
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})

    for(let blog of initialBlog){
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

test.only('checking how many blogs there are', async () => {
    const response = await api.get('/api/blogs')
    assert.strictEqual(response.body.length, 3)
})

test('a valid blog can be added')

after(async () => {
    await mongoose.connection.close()
})