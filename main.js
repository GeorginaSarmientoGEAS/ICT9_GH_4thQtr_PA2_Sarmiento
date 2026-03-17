// Participation Activity 2
function compute_rank() {
    let math_score = Number(document.getElementById('math_score').value);

    if (math_score > 94) {
        window.alert('Gold');
    }
    else if (90 < math_score < 95) {
        window.alert('Silver');
    }
    else if (85 < math_score < 90) {
        window.alert('Bronze');
    }
    else if (80 < math_score < 85) {
        window.alert('Merit');
    }
    else {
        window.alert('Invalid');
    }
}