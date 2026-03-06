<script src="https://cdn.jsdelivr.net/npm/jquery.maskedinput@1.4.1/src/jquery.maskedinput.min.js"></script>
<script>
jQuery(function ($) {

    /*** Маска телефона ***/
    function bygi_applyPhoneMask(context = document) {
        const $inputs = $('input[type="tel"]', context);
        if (!$inputs.length) return;

        // Инициализация маски
        $inputs.mask("+7(999)-999-99-99", {
            placeholder: "+7(___)-___-__-__"
        });

        // Логика управления курсором (перекидывание в начало при клике/фокусе)
        $inputs.off('focus.bygi click.bygi').on('focus.bygi click.bygi', function () {
            const input = this;

            setTimeout(() => {
                const value = input.value;
                const cursorPos = input.selectionStart;
                const emptyPos = value.indexOf('_');

                // Если есть незаполненные символы
                if (emptyPos !== -1) {
                    // Если пользователь кликнул ПОСЛЕ первой пустоты — перекидываем на первое пустое место
                    if (cursorPos > emptyPos) {
                        input.setSelectionRange(emptyPos, emptyPos);
                    }
                }
            }, 0);
        });
    }

    // Инициализация при загрузке страницы
    bygi_applyPhoneMask();

    // Инициализация для всплывающих окон Elementor
    $(document).on('elementor/popup/show', function (e, id, instance) {
        bygi_applyPhoneMask(instance.$element[0]);
    });

});
</script>
