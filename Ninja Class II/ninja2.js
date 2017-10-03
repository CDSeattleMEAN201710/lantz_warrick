function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;
    var force;
    this.sayName = function(){
        console.log("My ninja name is " + this.name + "!");
        return this;
    }
    this.showStats = function(){
        console.log("Name: " + this.name + ", Health: " + this.health + ", Speed: " + speed + ", Strength: " + strength)
        return this;
    }
    function extraStrength(){
        strength += 3
        return strength
    }
    this.drinkSake = function(){
        extraStrength()
        this.health += 10;
        console.log("Kampai! Now " + this.name + "'s health is " + this.health + " and strength is " + strength)
        return this;
    }
    this.punch = function(victim){
        if (victim.constructor.name !== "Ninja") {
            console.log("Error: only ninjas can fight ninjas!")
            return false
        }
        victim.health -= 5;
        console.log(victim.name + " was punched by " + this.name + " and health is now " + victim.health)
    }
    function kickForce(){
        force = strength * 15;
        return force;
    }
    this.kick = function(victim){
        if (victim.constructor.name !== "Ninja") {
            console.log("Error: only ninjas can fight ninjas!")
            return false
        }
        kickForce();
        victim.health -= force;
        console.log(victim.name + " was kicked by " + this.name + " doing " + force +  " damage, and health is now " + victim.health)
        return this;
    }
}
var ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
// -> "My ninja name is Hyabusa!"
ninja1.showStats();
// -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Squirtle");
red_ninja.punch(blue_ninja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"
blue_ninja.kick(red_ninja);
red_ninja.drinkSake().drinkSake()
red_ninja.kick(blue_ninja)
// -> "Bill Gates was kicked by Goemon and lost 15 Health!"
ninja1.punch("Drumpf")

