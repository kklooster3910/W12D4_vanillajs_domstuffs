// $(document).on("ready", function () {});  

// $(() => {
    //     console.log('testing')
    //     const $l = () => {};
    //     window.$l = $l
    // });
    
    // $(() => {
        //     const window.$1 = function (arg);
        //     const game = new Game();
        //     const $board = $('.ttt');
        //     new View(game, $board);
        // });
// document.addEventListener("DOMContentLoaded", function() {});

const DomNodeCollection = require("./dom_node_collection.js");

// let array = $l()

// window.domFunction = DomNodeCollection

window.$l = function (arg) {
    // console.log('testing')
    // debugger;
    if (typeof arg === "string") {
        var selected = document.querySelectorAll(arg);
        const selectArray =  Array.from(selected); 
        const nodeCollection = new DomNodeCollection(selectArray);
        // return selectArray
        return nodeCollection;
    } else if (arg instanceof HTMLElement) {
        // let newArg = Array.from(arg);
        // var element = document.querySelectorAll(arg); this is what not to do! 
        const nodeCollection = new DomNodeCollection([arg]);
        // debugger;
        return nodeCollection;
    }
}
// if string
// $l(".testing2")
// if HTMLElement
// $l("<section>")


