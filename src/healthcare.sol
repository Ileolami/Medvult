// SPDX-License-Identifier: MIT
pragma solidity >=0.8.22;

contract Details {
    mapping(address => Patients) internal patients;
    mapping(address => Doctors) internal doctors;

    struct Patients {
        string firstName;
        string lastName;
        uint mobNum;
        uint dob;
        string city;
        string state;
        uint password;
        uint confirmPassword;
    }

    struct Doctors {
        string firstName;
        string lastName;
        string specialization;
        string  licenseNumber;
        string city;
        string state;
        uint password;
        uint confirmPassword;
    }

    function addPatients(
        address _patientAddr,
        string memory _firstName,
        string memory _lastName,
        uint _mobNum,
        uint _dob,
        string memory _city,
        string memory _state,
        uint _password,
        uint _confirmPassword
    ) public {
        Patients memory patientList;
        patientList.firstName = _firstName;
        patientList.lastName = _lastName;
        patientList.mobNum = _mobNum;
        patientList.dob = _dob;
        patientList.city = _city;
        patientList.state = _state;

        require(_password == _confirmPassword, "Passwords do not match");

        patientList.password = _password;
        patientList.confirmPassword = _confirmPassword;

        patients[_patientAddr] = patientList;
    }

    function getPatientDetails(address _patientAddr) public view returns (Patients memory) {
        return patients[_patientAddr];
    }

    function addDoctors(
        address _doctorAddr,
        string memory _firstName,
        string memory _lastName,
        string memory _specialization,
        string memory _licenseNumber,
        string memory _city,
        string memory _state,
        uint _password,
        uint _confirmPassword
    ) public {
        Doctors memory doctorList;
        doctorList.firstName = _firstName;
        doctorList.lastName = _lastName;
        doctorList.specialization = _specialization;
        doctorList.licenseNumber = _licenseNumber;
        doctorList.city = _city;
        doctorList.state = _state;

        require(_password == _confirmPassword, "Passwords do not match");

        doctorList.password = _password;
        doctorList.confirmPassword = _confirmPassword;

        doctors[_doctorAddr] = doctorList;
    }

    function getDoctorDetails(address _doctorAddr) public view returns (Doctors memory) {
        return doctors[_doctorAddr];
    }
}
