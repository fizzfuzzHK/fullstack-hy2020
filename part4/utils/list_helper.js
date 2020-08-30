const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => { 
    var sum = 0
    for (var i=0 ; i < blogs.length; i++){
        sum += blogs[i].likes
    }
    return sum
}

const favoriteBlog = (blogs) => {
    var max = 0
    var current = 0
    var max_list = 0
    
    for (var i=0 ; i < blogs.length; i++){
        current = blogs[i].likes
        if (current === Math.max(max,current)){
            max_list = i
            max = current
        }
    }

    result = {title :blogs[max_list].title,
        author :blogs[max_list].author,
        likes:blogs[max_list].likes
        }
    return  result
}


module.exports = {
    dummy,
   totalLikes,
   favoriteBlog
}

