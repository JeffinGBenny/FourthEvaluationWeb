class Employee {
    constructor(id, name, project, causeForTravel, source, destination, fromDate, NoOfDays, ToDate, modeOfTravel) {
        this.id = id;
        this.name = name;
        this.project = project;
        this.causeForTravel = causeForTravel;
        this.source = source;
        this.destination = destination;
        this.fromDate = fromDate;
        this.NoOfDays = NoOfDays;
        this.ToDate = ToDate;
        this.modeOfTravel = modeOfTravel;
    }
}


document.addEventListener('DOMContentLoaded', function (
) {
    const form = document.getElementById('frmRequest');
    const TravelRequests = document.getElementById('TravelRequests');
    const Requests = [];

    const empid = document.getElementById('empid');
        const nameInput = document.getElementById('empName');
        const project = document.getElementById('project');
        const cause = document.getElementById('cause');
        const source = document.getElementById('source');
        const destination = document.getElementById('destination');
        const fromDate = document.getElementById('fromDate');
        const noOfDays = document.getElementById('noOfDays');
        const toDate = document.getElementById('toDate');
        const modeOfTravel = document.getElementById('modeOfTravel');


 

    function addTravelRequest(request) {
        Requests.push(request);
        displayTravelRequests();
    }
    function displayTravelRequests() {
        TravelRequests.innerHTML = '';
        const reversedpost=Requests.slice().reverse();
    
        for (const post of reversedpost) {
            const postElement = document.createElement('div');
            postElement.classList.add('border', 'p-3', 'mb-3');
    
            postElement.innerHTML = `
                <h4>${post.id}</h4>
                <div>${post.location}</div>
                <p><strong>Author:</strong> ${post.name}</p>
                <p><strong>Email:</strong> ${post.email}</p>
                <p><strong>Date:</strong> ${post.NoOfDays
                }</p>
            `;
            TravelRequests.appendChild(postElement);
        }
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const empid = document.getElementById('empid').value;
        const nameInput = document.getElementById('empName').value;
        const project = document.getElementById('project').value;
        const cause = document.getElementById('cause').value;
        const source = document.getElementById('source').value;
        const destination = document.getElementById('destination').value;
        const fromDate = document.getElementById('fromDate').value;
        const noOfDays = document.getElementById('noOfDays').value;
        const toDate = document.getElementById('toDate').value;
        const modeOfTravel = document.getElementById('modeOfTravel').value;

        
            if (!empid.trim()) {
                idError.textContent = 'Enter id';
            }
            else {
                idError.textContent = '';
            }
            if (!nameInput.trim()) {
                NameError.textContent = 'Enter your name';
            }
            else {
                NameError.textContent = '';
            }
            if (!project.trim()) {
                ProjectError.textContent = 'Enter a project';
            }
            else {
                ProjectError.textContent = '';
            }
            if (!cause.trim()) {
                CauseError.textContent = 'Enter Cause';
            }
            else {
                CauseError.textContent = '';
            }
            if (!source.trim()) {
                SourceError.textContent = 'Enter Source';
            }
            else {
                SourceError.textContent = '';
            }
            
            if (!destination.trim()) {
                DestinationError.textContent = 'Enter destination';
            }
            else {
                DestinationError.textContent = '';
            }

            if (!modeOfTravel.trim()) {
                ModeOfTravelError.textContent = 'Enter mode of travel';
            }
            else {
                ModeOfTravelError.textContent = '';
            }

            if (!fromDate.trim()) {
                FromDateError.textContent = 'Enter from date';
            }
            else {
                FromDateError.textContent = '';
            }
            if (!noOfDays.trim()) {
                NoOfDaysError.textContent = 'Enter no of days';
            }
            else {
                NoOfDaysError.textContent = '';
            }
            if (!toDate.trim()) {
                ToDateError.textContent = 'Enter to date';
            }
            else {
                ToDateError.textContent = '';
            }
    
        



        const employee = new Employee(empid, nameInput, project, cause, source, destination, fromDate, noOfDays, toDate, modeOfTravel);
        console.log(employee);
        addTravelRequest(Employee);




    });
});

function calculateToDate() {
    // Get the input elements
    var fromDateElement = document.getElementById('fromDate');
    var toDateElement = document.getElementById('toDate');
    var noOfDaysElement = document.getElementById('noOfDays');

    // Get the selected from date and number of days as Date objects
    var fromDate = new Date(fromDateElement.value);
    var noOfDays = parseInt(noOfDaysElement.value);

    // Check if the from date is valid and noOfDays is a positive number
    if (!isNaN(fromDate.getTime()) && noOfDays > 0) {
        // Calculate the to date
        var toDate = new Date(fromDate);
        toDate.setDate(fromDate.getDate() + noOfDays);

        // Format the to date as YYYY-MM-DD (HTML date input format)
        var yyyy = toDate.getFullYear();
        var mm = String(toDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        var dd = String(toDate.getDate()).padStart(2, '0');
        var formattedDate = yyyy + '-' + mm + '-' + dd;

        // Set the calculated to date in the "toDate" input element
        toDateElement.value = formattedDate;
    } else {
        // Handle invalid input or negative number of days
        toDateElement.value = ''; // Clear the "toDate" input
    }
}


