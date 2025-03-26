const pollController = require ("../api/poll/pollController")
const votingController = require ("../api/voting/votingController")
const resultController = require ("../api/result/resultController")
const router = require ('express').Router()

// To set ques
router.post("/setQues",pollController.setQues)

// To vote
router.post("/vote",votingController.vote)

router.post("/result", resultController.result)

module.exports = router