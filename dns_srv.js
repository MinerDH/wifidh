const dgram = require("dgram")
const dnspacket = require("dns-packet")
const server = dgram.createSocket("udp4")

const db = {
    "instagram.com":"10.0.0.1",
    "www.instagram.com":"10.0.0.1",
    "www.google.com": "10.0.0.1",
    "connectivitycheck.gstatic.com":"10.0.0.1",
    "dh.com":"10.0.0.1"
}
server.on("message",(msg,rinfo)=>{
let increq = dnspacket.decode(msg) 
console.log(increq.questions)
//var ip = db[increq.questions[0].name]
ip = "10.0.0.1"
const ans = dnspacket.encode({
    type: "response",
    id: increq.id,
    flags: dnspacket.AUTHORITATIVE_ANSWER,
    questions: increq.questions,
    answers: [{
        type: 'A',
        class: 'IN',
        name: increq.questions[0].name,
        data: ip

    }]
    
})
server.send(ans,rinfo.port,rinfo.address)
})


server.bind(53,"10.0.0.1")
console.log("server running")
