let area = document.getElementsByClassName("borough");
Array.from(area).forEach((item) => item.addEventListener("click", userDemand));

/**
 * Brings users chosen borough to help data filter
 * @param {Event} event Users info chosen based on Borough in DOM
 */

function userDemand(event) {
  let complaintsnum = Number(document.getElementById("numOfComplaints").value);

  if (!complaintsnum) {
    complaintsnum = 10;
  }
  let town = event.target.innerHTML;
  if (town === "STATEN ISLAND") town = "STATEN%20ISLAND";
  document.getElementById("Container").innerHTML = "";
  nypdSearch(complaintsnum, town).then(informShown);
}

/**
 * Fetches tailored information for userDemand
 * @param {Number} constraint limiting number attached to URL
 * @param {String} town Locks borough attached to URL
 * @returns
 */
const nypdSearch = async (constraint, town) => {
  const search = "https://data.cityofnewyork.us/resource/erm2-nwe9.json";
  const enhanced = `?$select=descriptor,resolution_description&$limit=${constraint}&agency=NYPD&borough=${town.trim()}`;
  const searchEnhance = search + enhanced;

  try {
    const info = await fetch(searchEnhance);
    if (info.ok) {
      console.log(searchEnhance);
      const inform = await info.json();
      return inform;
    } else return info.json();
  } catch (error) {
    return null;
  }
};

/**
 * Presents "descriptor" in web page while attaching button
 * and event listener to each button for "resolution_description"
 * @param {Array} fetchedObjects Array of object holding "descriptor" and "resolution_description"
 */

const informShown = (fetchedObjects) => {
  if (fetchedObjects !== null) {
    console.log(fetchedObjects);

    let container1 = document.getElementById("Container");
    // let container1 = document.getElementsByID("Container");
    fetchedObjects.forEach((item) => {
      let complaintholder = document.createElement("div");
      let descriptorholder = document.createElement("div");
      descriptorholder.id = "descriptorholder";

      let blurb = document.createElement("div");
      blurb.id = "blurb";
      descriptorholder.appendChild(blurb).innerHTML = item.descriptor;

      let result_bttn = document.createElement("button");
      result_bttn.className = "result_bttn";
      result_bttn.addEventListener(
        "mouseenter",
        () => (result_bttn.style.backgroundColor = "orange")
      );
      result_bttn.addEventListener(
        "mouseleave",
        () => (result_bttn.style.backgroundColor = "crimson")
      );
      let a = result_bttn.addEventListener("click", (event) =>
        additional(event, item.resolution_description)
      );
      descriptorholder.appendChild(result_bttn).innerHTML =
        "WHAT DID THE POLICE DO?";
      complaintholder.appendChild(descriptorholder);
      container1.appendChild(complaintholder);
    });
  }
};
/**
 *
 * @param {Event}  information about the event
 * @param {String} added the additional information after complaint
 */
const additional = (information, added) => {
  let complaintholder = information.target.parentElement.parentElement;
  if (complaintholder.childElementCount === 1) {
    let addedContainer = document.createElement("div");
    addedContainer.id = "addedContainer";
    addedContainer.innerHTML = added;
    complaintholder.appendChild(addedContainer);
  } else {
    complaintholder.removeChild(complaintholder.lastChild);
  }
};
