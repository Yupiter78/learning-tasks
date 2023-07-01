class CarService {
    static DefaultWorkingHours = {
        from: "9:00",
        till: "20:00"
    }
    constructor(name, workingHours) {
        this.name = name;
        this.workingHours = workingHours || CarService.DefaultWorkingHours;
    }
    repairCar(carName) {
        if (!carName) {
            console.error("You need to specify the name of the machine in order to have it repaired");
            return;
        }
        const time = new Date().getHours();
        const [openHour, closeHour] = Object.values(this.workingHours)
            .map(time => Number(time.split(":")[0]));
        console.log(openHour, closeHour);
        if (time < openHour || time > closeHour) {
            console.log("Unfortunately, we are now closed. Come back tomorrow");
        } else {
            console.log(`Let's get your car ${carName} repaired now! Expect, please.`)
        }
    }
}

const chevrolet = new CarService("Bosch");
chevrolet.repairCar("Chevrolet");