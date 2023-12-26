var btnHistory = document.querySelector("#history-tab");
var btnVision = document.querySelector("#vision-tab");
var btnGoals = document.querySelector("#goals-tab");

var tabContents = document.querySelector("#history-content");



const arr = [
    {
        id: "history",
        title: "History",
        paragraf: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora quas consequuntur sint dicta maiores, corrupti non! Delectus eveniet nostrum accusamus labore itaque, neque voluptatibus, repudiandae tempora voluptates explicabo inventore..."

    }
]

const arr2 = [
    {
        id: "vision",
        title: "Vision",
        paragraf: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora quas consequuntur sint dicta maiores, corrupti non! Delectus eveniet nostrum accusamus labore itaque, neque voluptatibus, repudiandae tempora voluptates explicabo inventore Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt amet vitae pariatur excepturi? Corporis illum deleniti voluptatum neque eligendi facere quis dolore qui optio possimus molestiae expedita eius, repellat culpa!..."

    }
]

const arr3 = [
    {
        id: "goals",
        title: "Goals ",
        paragraf: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam tempora quas consequuntur sint dicta maiores, corrupti non! Delectus eveniet nostrum accusamus labore itaque, neque voluptatibus, repudiandae tempora voluptates explicabo inventore Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ducimus natus pariatur saepe, aliquid corrupti, ipsa harum nostrum magni voluptas eveniet cupiditate quas excepturi inventore facilis tempore voluptatibus dolorum porro, quia unde! Dolor, magni accusantium dignissimos aliquam hic optio impedit..."

    }
]

arr.forEach(element => {

    var history = document.createElement('div');

    history.classList.add("history-text")

    tabContents.appendChild(history);   



    const title = document.createElement('h2'); 

    title.textContent = element.title;

    history.appendChild(title);


    const paragraf = document.createElement('p'); 

    paragraf.textContent = element.paragraf;

    history.appendChild(paragraf);
})



arr2.forEach(element => {

    
    var vision = document.createElement('div');
    
    vision.classList.add('vision-text');

    vision.classList.add('hidden');

    tabContents.appendChild(vision);


    

    const title2 = document.createElement('h2'); 

    title2.textContent = element.title;

    vision.appendChild(title2);


    const paragraf2 = document.createElement('p'); 

    paragraf2.textContent = element.paragraf;

    vision.appendChild(paragraf2);

})


arr3.forEach(element => {

    var goals = document.createElement('div');

    goals.classList.add('goals-text');
    
    goals.classList.add('hidden');
    
    tabContents.appendChild(goals);


    const title3 = document.createElement('h2'); 

    title3.textContent = element.title;

    goals.appendChild(title3);


    const paragraf3 = document.createElement('p'); 

    paragraf3.textContent = element.paragraf;

    goals.appendChild(paragraf3);

})

    var textHistory = document.querySelector(".history-text");
    var textGoals = document.querySelector(".goals-text");
    var textVision = document.querySelector(".vision-text");



btnVision.addEventListener("click", function(){


    textVision.classList.remove("hidden");
    textHistory.classList.add("hidden");
    textGoals.classList.add("hidden");

})

btnHistory.addEventListener("click", function(){


    textHistory.classList.remove("hidden");
    textVision.classList.add("hidden");
    textGoals.classList.add("hidden");

})

btnGoals.addEventListener("click", function(){


    textVision.classList.add("hidden");
    textGoals.classList.remove("hidden");
    textHistory.classList.add("hidden");

    })



