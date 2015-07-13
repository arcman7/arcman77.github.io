


var pathKeyWord = ["blog","index"];


var culturalBlogs = ["c1-chefs-kitchen.html","c3-thinking-style.html","c4-tech-issues.html","c5-feedback.html","c6-stereotype-threat.html","c7-values.html","c8-conflict.html","c9-questions.html"];

// you can use these arrays to load cultural and technical blogs as separate menus

var techBlogs =["t1-git-blog.html","t2-css-design.html","t3-arrays-hashes.html","t4-enumerable-methods.html","t5-ruby-classes.html","t6-oop-concepts.html","t7-JavaScript.html","t8-tech.html"];


$(document).ready(function(){
  var currentUrl = window.location.pathname;
  var insert;
   if( (currentUrl.includes("blog")) == false ){
     insert = "./blog/";
   }else{
     insert ="";
   }

    $('.menu').dropit();
});

/*$('.cmenu_button').click(function(){
        $('#culture').slideToggle('fast');
  });
$('.tmenu_button').click(function(){
        $('#tech').slideToggle('fast');
  });
*/

$('#culture').html("<ul>" +
    '<li><a href="'+insert+'c1-chefs-kitchen.html"> Chef vs Kitchen</a></li>' +
    '<li><a href="'+insert+'c3-thinking-style.html">Thinking Style </a></li>' +
    '<li><a href="'+insert+'c4-tech-issues.html"> Tech issues </a></li>' +
    '<li><a href="'+insert+'c5-feedback.html"> Pairing issues </a></li>'  +
    '<li><a href="'+insert+'c6-stereotype-threat.html"> Stereotype Labels </a></li>' +
    '<li><a href="'+insert+'c7-values.html">Values </a></li>' +
    '<li><a href="'+insert+'c8-conflict.html">Conflict</a></li>' +
    '<li><a href="'+insert+'c9-questions.html">Questions</a></li>' +
"</ul>");

$('#tech').html("<ul>" +
    '<li><a href="'+insert+'t1-git-blog.html"> Git & GitHub </a></li>' +
    '<li><a href="'+insert+'t2-css-design.html"> Classes vs. Id\'s </a></li>' +
    '<li><a href="'+insert+'t3-arrays-hashes.html"> Arrays & Hashes </a></li>' +
    '<li><a href="'+insert+'t4-enumerable-methods.html">Enumerables </a></li>' +
    '<li><a href="'+insert+'t5-ruby-classes.html">Ruby Classes </a></li>' +
    '<li><a href="'+insert+'t6-oop-concepts.html">Class Inheritance vs. Class Composition </a></li>' +
    '<li><a href="'+insert+'t7-JavaScript.html">JavaScript vs. Ruby Enumerables </a></li>' +
    '<li><a href="'+insert+'t8-tech.html">Ruby on Rails </a></li>' +
"</ul>");
});




//top level: https://banned4hax.github.io/
//blog level: https://banned4hax.github.io/blog/blog-template.html
//project level: https://banned4hax.github.io/projects/project-cyl.html
//alt command then drag so that you put a cursor at every line
//command + option + i

