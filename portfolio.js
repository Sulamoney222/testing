const head = document.querySelector('.head');



//when scrolling the page
window.addEventListener('scroll',function(){
    const h = head.getBoundingClientRect().height
    const page = window.pageYOffset
    
    if(page > h){
        head.classList.add("rect")
        
    }else{
        head.classList.remove("rect")
    }
    }
   
    


)

  //Editing a responsive bar after minimizing the acreen to a max-height
  
  const tog = document.querySelector('.tog')
  const navlinks = document.querySelector('.nav-links')
  const na = document.querySelector('.na')
 
  tog.addEventListener('click', function(){
    const naheight = na.getBoundingClientRect().height
    const linksheight = navlinks.getBoundingClientRect().height
    
    if(naheight == 0){
        na.style.height = `${linksheight}px`
    }else{
    na.style.height =0
    }
  })

const scrollLinks = document.querySelectorAll('.scroll-link');
 scrollLinks.forEach((e)=>{
 e.addEventListener('click', function(o){
    o.preventDefault()

    //calculate scroll
    const headheight = head.getBoundingClientRect().height
    const fixHead = head.classList.contains("rect")
    const naheight = na.getBoundingClientRect().height
    
    //navigate to specific spot
    const id = o.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)
    let position = element.offsetTop-headheight
    if(!fixHead){
        position = position-headheight
    }
    if(headheight> 70){
        position= position+naheight
    }
    console.log(headheight);
    //scroll method
    window.scrollTo({
        left:0,
        top:position
    })
    na.style.height =0
 })
 })
