exports.index = function(req, res){  //渲染一个页面返回
    res.render('Ajax.ejs');
};

exports.callData = function(req, res){
    var cate = req.params['i'];//取出参数
    console.log(req.params)
    var time = new Date()
    var value = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
    var message = ''
    if (cate == 1) {
        message = "她说民谣太穷了，一听就是一根烟，一听就是一瓶酒"
    }else if (cate == 2) {
        message = "而我只有一根烟了，还要撑一夜，只剩一点爱了，还要过一生"
    }else if (cate == 3){
        message = "后会无期"
    }
    res.json({
        message: message,
        time: value
    });
};
exports.person = function(req, res){
    var from = "任振东"
    var to   = "金三胖"
    var address = "两江国际"
    var time = "2017.04.19"
    res.json({
        from: from,
        to: to,
        address: address,
        time: time
    })
};
exports.array = function(req, res){
    var params = req.params['search']
    var arr = [
        "Anna",
        "Brittany",
        "Cinderella",
        "Diana",
        "Eva",
        "Fiona",
        "Gunda",
        "Hege",
        "Inga",
        "Johanna",
        "Kitty",
        "Linda",
        "Nina",
        "Ophelia",
        "Petunia",
        "Amanda",
        "Raquel",
        "Cindy",
        "Doris",
        "Eve",
        "Evita",
        "Sunniva",
        "Tove",
        "Unni",
        "Violet",
        "Liza",
        "Elizabeth",
        "Ellen",
        "Wenche",
        "Vicky"
    ]
    var backArr = []
    for(var i=0; i< arr.length; i++){
        if (arr[i].toLowerCase().search(params) != -1) { //如果找到匹配
            backArr.push(arr[i])
        }
    }
    res.json({
        array: backArr
    })
}