pragma solidity >=0.4.22 <0.9.0;
import "./access-control/Auth.sol";

contract Box {
    uint256 private value;
    Auth private auth;
    
    constructor(Auth _auth) public {
        auth = _auth;
    }

    event valueChage(uint256 newValue);

    function store(uint256 newValue) public {
        require(auth.isAdmin(msg.sender),"Unauthorized");
        value = newValue;
        emit valueChage(newValue);
    }

    function retrive() public view returns (uint256) {
        return value;
    }
}
