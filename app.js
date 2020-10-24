const text = [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium tincidunt ligula, ac vulputate risus suscipit a. Morbi ornare viverra orci, a molestie turpis pharetra sit amet. Vestibulum eget enim id elit lacinia volutpat. Morbi massa justo, sagittis vel turpis aliquam, imperdiet consequat tortor. Duis vel scelerisque nisi. Aliquam at mi dolor. Cras vehicula dignissim massa, quis pretium urna vulputate a. Nullam ligula augue, pharetra nec mattis vitae, aliquam sit amet purus. Sed ullamcorper quam non odio facilisis tincidunt. Sed feugiat pharetra velit vitae posuere. Etiam vulputate ultricies sapien vel imperdiet. Nullam consectetur dignissim libero quis auctor.`,
    `Morbi scelerisque est ut ullamcorper molestie. Etiam vehicula mauris nisi. Morbi tempus sem dui, eget dignissim urna pretium ut. Curabitur ullamcorper fringilla quam, at hendrerit magna condimentum ut. Nam vitae elit ornare, vulputate turpis id, feugiat lorem. Suspendisse potenti. Aenean sit amet luctus justo. Mauris convallis elementum tellus vel sollicitudin.`,
    `Nullam in velit imperdiet, auctor lorem eget, posuere arcu. Aliquam ornare eu risus vitae semper. Ut finibus elit urna, ut maximus risus pulvinar nec. Vestibulum dolor lacus, hendrerit eget interdum suscipit, consequat sit amet quam. Phasellus vitae tortor nec augue lacinia cursus. Sed porta elit non odio scelerisque convallis. Donec accumsan leo ut fermentum venenatis. Vestibulum malesuada tortor lacus, sed sodales magna sollicitudin at.`,
    `Maecenas consequat venenatis quam sed tempor. Curabitur quis purus vitae elit scelerisque ornare. Nullam tincidunt scelerisque tortor, quis ullamcorper lectus ultrices et. Sed laoreet augue nisi, sed dapibus leo blandit et. Nulla vitae volutpat sapien, non volutpat lectus. Sed venenatis et lacus nec rutrum. Proin tortor erat, sodales quis venenatis eu, vulputate vel orci. Nunc vitae felis a odio aliquam sagittis ut sed dui. Integer aliquet auctor dignissim. Nulla id ipsum nec erat convallis tristique a id massa. Curabitur vel eleifend ante. Aenean gravida ultricies turpis non hendrerit.`,
    `Praesent tempus vitae mi sit amet eleifend. In ornare posuere nunc non pretium. Vestibulum et turpis felis. Cras imperdiet justo quis nisl accumsan, id luctus justo interdum. Donec dapibus lacus leo, a scelerisque odio gravida et. Curabitur non lacinia urna. Donec lobortis tortor nec ex tincidunt consectetur. Suspendisse sit amet tincidunt augue, at accumsan tellus. Ut hendrerit est purus, vel ornare turpis lacinia ac. Nam lacinia orci eros, eu pharetra nulla sagittis sed. Phasellus commodo urna sed mauris mollis, sed viverra orci aliquet. Integer quis tincidunt quam.`
]

const $form = document.querySelector('.lorem-form')
const $input = document.querySelector('#amount')
const $text = document.querySelector('.lorem-text')

$form.addEventListener('submit', e => {
    e.preventDefault()

    const value = $input.value

    $text.innerHTML = ''

    for(let i = 0; i < value; i++) {
        $text.innerHTML += `<p>${getParagraphRandom()}</p>`
    }
})

function getParagraphRandom() {
    return text[Math.floor(Math.random() * text.length)]
}