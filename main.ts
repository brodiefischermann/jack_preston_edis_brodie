brick.buttonEnter.onEvent(ButtonEvent.Pressed, function () {
    for (let index = 0; index < 4; index++) {
        motors.largeAD.tank(50, 50, 3, MoveUnit.Rotations)
        motors.largeAD.tank(0, 50, 1, MoveUnit.Rotations)
    }
    motors.largeAD.tank(0, 50, 2, MoveUnit.Rotations)
    for (let index = 0; index < 4; index++) {
        motors.largeAD.tank(50, 50, 3, MoveUnit.Rotations)
        motors.largeAD.tank(50, 0, 1, MoveUnit.Rotations)
    }
})
forever(function () {
	
})
