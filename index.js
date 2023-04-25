function superbowlWin(arr) {
    const winningYear = arr.find(obj => obj.result === "W");
    return winningYear ? winningYear.year : undefined;
  }
