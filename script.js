function isSameType(value1, value2) {
  // Check if both values are NaN
  if (isNaN(value1) && isNaN(value2)) {
    return true; // Both are NaN
  }
	else {
		return false;
	}

  // Check if types are the same
  return typeof value1 === typeof value2;
}


