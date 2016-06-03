var counter = 0;

$(document).ready(function () {
  $('#makeNewRow').on('click', function() {
    counter++;
    console.log('make new row clicked');
    console.log(counter);

    var createDiv = document.createElement('div');

    createDiv.textContent = "div # " + counter;
    createDiv.className = 'container';
    createDiv.id = 'row';

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'delete';

    var changeColor = document.createElement('button');
    changeColor.textContent = 'change';
    changeColor.className = 'change';
    changeColor.id = 'change';


    createDiv.appendChild(deleteButton);
    $('body').append(createDiv);

    createDiv.appendChild(changeColor);
    $('body').append(createDiv);

    $('.container').css('background', 'yellow');


  });
  $(document).on('click', '.change', function() {
    var parent = $(this).parent();
    // get parent class
    var parentClass = parent.attr('class');
    // toggle class color
    if( parentClass == 'red'){
      // remove current class and add new class
      parent.removeClass().addClass('yellow');
      parent.css({ 'background-color': 'yellow' });
    }else{
      parent.removeClass().addClass('red');
      parent.css({ 'background-color': 'red' });
    }
  });
  $(document).on('click', '.delete', function() {
    $(this).parent().remove();
  });
});
