class DomNodeCollection {
    constructor (array) {
       this.array = array 
    }

    html (string) {
        if (string) {
            for(let i = 0; i < this.array.length; i++ ) {
                this.array[i].innerHTML = string;
            }
            return this;
        } else {
            return this.array[0].innerHTML;
        }
    }

    empty () {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].innerHTML = "";
            // this.array[i].outerHTML = "<div></div>"; just for testing purposed, wanted to see if it would remove the bullet from the li tag
        }   
    }

    append (arg) {
        // let that = this;
        // debugger;
        if (typeof arg === "string") {
            for (let i = 0; i < this.array.length; i++) {
                this.array[i].innerHTML += ( " " + arg)
            }
        } else if (arg instanceof HTMLElement){
            for (let i = 0; i < this.array.length; i++) {
                this.array[i].innerHTML += ( " " + arg.outerHTML)
            }
        } else {
            for (let i = 0; i < this.array.length; i++) {
                for (let j = 0; j < arg.array.length; j++) {
                    this.array[i].innerHTML += (" " + arg.array[j].outerHTML)  
                }
            }
        }
    }

    attr (getter, setter) {
        
        if (!setter) {
            return this.array[0].attributes[getter]
        }
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].attributes[getter] = setter;
        }
    }


}
// Syntax
// Return the value of an attribute:

// $(selector).attr(width)
// -> 300px
// Set the attribute and value:
// $(selector).attr(width, 500)
// -> 500px

        



// this.array[i].innerHTML = arg.outerHTML

// this.array[i].innerHTML = arg

module.exports = DomNodeCollection;

