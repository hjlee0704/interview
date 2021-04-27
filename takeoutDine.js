function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  var takeOutOrdersIndex = 0;
  var dineInOrdersIndex = 0;
  var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  var dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (var i = 0; i < servedOrders.length; i++) {
      var order = servedOrders[i];

      // if we still have orders in takeOutOrders
      // and the current order in takeOutOrders is the same
      // as the current order in servedOrders
      if (takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
              order === takeOutOrders[takeOutOrdersIndex]) {
          takeOutOrdersIndex++;

      // if we still have orders in dineInOrders
      // and the current order in dineInOrders is the same
      // as the current order in servedOrders
      } else if (dineInOrdersIndex <= dineInOrdersMaxIndex &&
              order === dineInOrders[dineInOrdersIndex]) {
          dineInOrdersIndex++;

      // if the current order in servedOrders doesn't match the current
      // order in takeOutOrders or dineInOrders, then we're not serving first-come,
      // first-served
      } else {
          return false;
      }
  }

  // check for any extra orders at the end of takeOutOrders or dineInOrders
  if (dineInOrdersIndex != dineInOrders.length ||
         takeOutOrdersIndex != takeOutOrders.length) {
      return false;
  }

  // all orders in servedOrders have been "accounted for"
  // so we're serving first-come, first-served!
  return true;
}

//non optimized

function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {

  // base case
  if (servedOrders.length === 0) {
      return true;
  }

  // if the first order in servedOrders is the same as the
  // first order in takeOutOrders
  // (making sure first that we have an order in takeOutOrders)
  if (takeOutOrders.length && takeOutOrders[0] === servedOrders[0]) {

      // take the first order off takeOutOrders and servedOrders and recurse
      return isFirstComeFirstServed(takeOutOrders.slice(1), dineInOrders, servedOrders.slice(1));

  // if the first order in servedOrders is the same as the first
  // in dineInOrders
  } else if (dineInOrders.length && dineInOrders[0] === servedOrders[0]) {

      // take the first order off dineInOrders and servedOrders and recurse
      return isFirstComeFirstServed(takeOutOrders, dineInOrders.slice(1), servedOrders.slice(1));

  // first order in servedOrders doesn't match the first in
  // takeOutOrders or dineInOrders, so we know it's not first-come, first-served
  } else {
      return false;
  }
}