pragma solidity >=0.4.22 <0.9.0;

contract Auth {
    address private administrator;

    constructor() public {
        administrator = msg.sender;
    }

    function isAdmin(address user) public view returns(bool){
        return user == administrator;
    }
}
