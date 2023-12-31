// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/utils/math/Math.sol";

/* 
    specifies time-locks and thresholds
    */
contract Restrictions {
    using Math for uint256;

    uint256 public voting_duration = 432000; // 5days
    uint256 public implementation_delay = 86400; // 1 day

    // uint256 private quorum = 50%;
    constructor() {}

    /* 
    here, `target` means the quantity whose threshold is being validated.
    `comparison` is the represents the quantity `target` is being validated with.
    it returns a boolean if the quorum is high enough.

    the quorum I have chosen is 60%.
    */
    function quorum(
        uint256 target,
        uint256 comparison
    ) public pure returns (bool) {
        uint256 comp = comparison.mulDiv(60, 100);
        return target >= comp ? true : false;
    }
}
