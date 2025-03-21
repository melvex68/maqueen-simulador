robot.onLineLeftRightDetected(true, true, function () {
    robot.motorTank(70, 70)
})
robot.onLineLeftRightDetected(false, true, function () {
    robot.motorTank(70, 30)
})
robot.onLineLeftRightDetected(true, false, function () {
    robot.motorTank(30, 70)
})
robot.dfRobotMaqueen.start()
basic.forever(function () {
	
})
