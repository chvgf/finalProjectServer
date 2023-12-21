const express = require('express');

const { client } = require('../database/index');
const db = client.db('lastTeamProject'); // board 데이터베이스에 연결 (애초에 파일이 없어도 생성되면서 연결됨)

const router = express.Router();

// GET '/' 라우터
router.get('/', (req, res) => {
  res.render('write.ejs');
});


module.exports = router;