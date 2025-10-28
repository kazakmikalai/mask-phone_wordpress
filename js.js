<script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js"></script>
<script type="text/javascript">
jQuery(function($) {
  function bygi_applyPhoneMask(context = document) {
    const $inputs = $('input[type="tel"]', context);
    $inputs.mask("+7(999)999-99-99", { placeholder: "+7(___)___-__-__" });

    // Ставим курсор сразу после "+7("
    $inputs.on('click focus', function() {
      const input = this;
      setTimeout(function() {
        const val = input.value;
        const pos = val.indexOf('(') + 1; 
        if (input.selectionStart > pos) return; 
        input.setSelectionRange(pos, pos);
      }, 0);
    });
  }

  bygi_applyPhoneMask();
  $(document).on('elementor/popup/show', function(event, id, instance) {
    bygi_applyPhoneMask(instance.$element);
  });
});
</script>
