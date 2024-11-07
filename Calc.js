let buttons = document.querySelectorAll("#but");
let eql = document.getElementById("buteql");
let final_screen = document.getElementById("screen");
let clear = document.getElementById("butc");

let nums = [];
buttons.forEach(button => {
    button.addEventListener("click", () => {

        nums.push(button.innerHTML);
        console.log(nums);
        final_screen.innerHTML = `<p>${nums.join('')}</p>`;

    })

})
// Basic
eql.addEventListener("click", () => {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] == "+") {

            let set1 = nums.slice(0, i);
            n_s1 = set1.join('');
            let set2 = nums.slice(i + 1);
            n_s2 = set2.join('');
            let sum = parseInt(n_s1) + parseInt(n_s2);
            final_screen.innerText = sum;

        }
        else if (nums[i] == 'x') {

            let set1 = nums.slice(0, i);
            n_s1 = set1.join('');
            let set2 = nums.slice(i + 1);
            n_s2 = set2.join('');
            let multi = parseInt(n_s1) * parseInt(n_s2);
            final_screen.innerText = multi;
        }
        else if (nums[i] == '--') {

            let set1 = nums.slice(0, i);
            n_s1 = set1.join('');
            let set2 = nums.slice(i + 1);
            n_s2 = set2.join('');
            let subs = parseInt(n_s1) - parseInt(n_s2);
            final_screen.innerText = subs;
        }
        else if (nums[i] == '%') {
            let set1 = nums.slice(0, i);
            n_s1 = set1.join('');
            let set2 = nums.slice(i + 1);
            n_s2 = set2.join('');
            let divi = parseInt(n_s1) / parseInt(n_s2);
            final_screen.innerText = divi;
        }


    }


})

clear.addEventListener("click", () => {
    final_screen.innerText = null;
    // location.reload() for auto refreshment in the page
    location.reload();

})











