angular.module('EmployeeCtrl', []).controller('EmployeeController', function($scope) {

                $scope.students = [
                    {
                        "firstname": "Karen",
                        "lastname": "Manukyan",
                        "email": "Karen01@gmail.com",
                        "salary": "150000",
                        "phone": "055555555",
                        "imgUrl": "http://www.duffzone.org/desktops/alex/donut/640x480.jpg"
                    },
                    {
                        "firstname": "Gayane",
                        "lastname": "Galstyan",
                        "email": "Gayane@gmail.com",
                        "salary": "220000",
                        "phone": "055111111",
                        "imgUrl": "http://puzzles-games.eu/data/media/3/Kung-Fu-Panda-2-Master-Po-Muscular-Coordination.jpg"
                    },
                    {
                        "firstname": "Vardan",
                        "lastname": "Alaverdyan",
                        "email": "Vardan@gmail.com",
                        "salary": "185000",
                        "phone": "055255522",
                        "imgUrl": "http://bipbap.ru/wp-content/uploads/2017/10/cute-dogs-photos-640x480.jpg"
                    },
                    {
                        "firstname": "Hrach",
                        "lastname": "Simonyan",
                        "email": "Hrach@gmail.com",
                        "salary": "180000",
                        "phone": "055666222",
                        "imgUrl": "http://www.123mobilewallpapers.com/wp-content/uploads/2014/07/danbo_in_forest.jpg"
                    },
                    {
                        "firstname": "Rita",
                        "lastname": "Karapetyan",
                        "email": "Rita@gmail.com",
                        "salary": "180500",
                        "phone": "055228522",
                        "imgUrl": "https://forum.videohelp.com/attachment.php?attachmentid=9471&d=1320463419"
                    }
                ];


        $scope.showBigDiv = true;
        $scope.showDelBut = true;

        $scope.showRegDiv = function(){

            $scope.hideupdateDiv();
            $scope.hideViewDiv();
            $scope.regDiv = true;

        };

        $scope.hideRegDiv = function () {

            $scope.regDiv = false;
            $scope.regFirstname = undefined;
            $scope.regLastname = undefined;
            $scope.regEmail = undefined;
            $scope.regSalary = undefined;
            $scope.regPhone = '';
            $scope.regImage = undefined;
            $scope.isReqFname = false;
            $scope.isReqLname = false;
            $scope.isReqEmail = false;
            $scope.isReqSalary = false;
            $scope.isReqPhone = false;
            $scope.isReqImage = false;

        };

        $scope.saveNewStudent = function () {

            if($scope.regFirstname === undefined){

                $scope.isReqFname = true;

            }else if($scope.regLastname === undefined){

                $scope.isReqLname = true;

            }else if($scope.regEmail === undefined){

                $scope.isReqEmail = true;

            }else if($scope.regSalary === undefined){

                $scope.isReqSalary = true;

            }else if($scope.regPhone === undefined){

                $scope.isReqPhone = true;

            }else if($scope.regImage === undefined){

                $scope.isReqImage = true;

            }else {

                $scope.students.push({"firstname": $scope.regFirstname,"lastname": $scope.regLastname,
                    "email": $scope.regEmail, "salary": $scope.regSalary,
                    "phone": $scope.regPhone, "imgUrl": $scope.regImage});
                $scope.hideRegDiv();
            }

        };

        $scope.hideViewDiv = function () {

            $scope.showDelBut = true;
            $scope.hideView = false;

        };

        $scope.viewStudent = function(ind){

            $scope.showDelBut = false;
            $scope.hideView = true;

            $scope.hideupdateDiv();
            $scope.hideRegDiv();

            $scope.viewName = $scope.students[ind].firstname;
            $scope.viewLastname = $scope.students[ind].lastname;
            $scope.viewEmail = $scope.students[ind].email;
            $scope.viewSalary = $scope.students[ind].salary + ' AMD';
            $scope.viewPhone = $scope.students[ind].phone;
            $scope.studentImgPath = $scope.students[ind].imgUrl;

        };

        $scope.deleteStudent = function(ind){

            $scope.students.splice(ind, 1);

        };

        $scope.update = function (ind) {

            $scope.hideViewDiv();
            $scope.hideRegDiv();

            $scope.thisInd = ind;

            $scope.updateDiv = true;
            $scope.showBigDiv = false;

            $scope.studentFirstname = $scope.students[ind].firstname;
            $scope.studentLastname = $scope.students[ind].lastname;
            $scope.studentEmail = $scope.students[ind].email;
            $scope.studentSalary = +$scope.students[ind].salary;
            $scope.studentPhone = $scope.students[ind].phone;
            $scope.studentImage = $scope.students[ind].imgUrl;

        };

        $scope.hideupdateDiv = function () {

            $scope.updateDiv = false;
            $scope.showBigDiv = true;

        };

        $scope.saveUpdateStudent = function (ind) {

            if($scope.studentFirstname === undefined){

                $scope.isReqFnameUp = true;

            }else if($scope.studentLastname === undefined){

                $scope.isReqLnameUp = true;

            }else if($scope.studentEmail === undefined){

                $scope.isReqEmailUp = true;

            }else if($scope.studentSalary === undefined){

                $scope.isReqSalaryUp = true;

            }else if($scope.studentPhone === undefined){

                $scope.isReqPhoneUp = true;

            }else if($scope.studentImage === undefined){

                $scope.isReqImageUp = true;

            }else {

                $scope.students[ind].firstname = $scope.studentFirstname;
                $scope.students[ind].lastname = $scope.studentLastname;
                $scope.students[ind].email = $scope.studentEmail;
                $scope.students[ind].salary = $scope.studentSalary;
                $scope.students[ind].phone = $scope.studentPhone;
                $scope.students[ind].imgUrl = $scope.studentImage;

                $scope.hideupdateDiv();

            }

        };
});