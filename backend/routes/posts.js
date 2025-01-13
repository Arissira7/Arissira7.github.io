const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' }); // 设置上传文件的存储路径
let posts = []; // 存储博客文章的数组

// 获取所有文章
router.get('/', (req, res) => {
    res.json(posts);
});

// 创建新文章
router.post('/', upload.single('video'), (req, res) => {
    const newPost = {
        title: req.body.title,
        content: req.body.content,
        videoPath: req.file.path // 存储视频文件的路径
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

module.exports = router; 