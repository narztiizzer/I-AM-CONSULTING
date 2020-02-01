module.exports.palindrome = function(request, response){
    var sample = "deleveled".toLowerCase()
    var firstPart = sample.substring(0, (sample.length / 2))
    var isPalindrome = true

    for(var index = 0; index < firstPart.length; index++){
        var secondPartIndex = (sample.length - 1) - index
        var firstPartChar = firstPart.charAt(index)
        var secondPartChar = sample.charAt(secondPartIndex)

        if(firstPartChar !== secondPartChar){isPalindrome = false }
    }

    response.json({
        result : `${sample} ${ isPalindrome ? 'is' : 'isn\'t' } palindrome`
    })
}

module.exports.groupWords = function(request, response){
    var words = [
        "VMRCO", "VORCM", "MCRTOX", "ZXTAC", "XZATC", 
        "XMTCOR", "OXVS", "AZTXC", "VXOS", "RZAT", 
        "MRCOTX", "SVXO", "TRAZ", "ZTAR", "MVOCR"
    ]
    var result = [
        [ 
            words[0] 
        ]
    ]
    for(var index = 1; index < words.length; index++){
        var matchGroupIndex = -1
        for(var resultIndex = 0; resultIndex < result.length; resultIndex++){
            var item = result[resultIndex][0].split('').sort().join('')
            var compare = words[index].split('').sort().join('')
            if(item == compare){ matchGroupIndex = resultIndex }
        }
        if(matchGroupIndex != -1) result[matchGroupIndex].push(words[index])
        else result.push([words[index]])
    }

    response.json({
        result : result
    })
}

module.exports.generateWords = function(request, response){
    var word = 'ABC'
    var result = wordGenerater(word, '')
    response.json({
        result : result
    })
}

function wordGenerater(word, startWith){
    
}

module.exports.findSummary = function(request, response){
    var limit = 3
    var result = 0
    for(var index = 1; index <= limit; index++){ 
        result = result + Math.pow(index, index) 
    }

    response.json({
        input: `N = ${limit}`,
        output : result
    })
}
