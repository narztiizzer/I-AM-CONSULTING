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