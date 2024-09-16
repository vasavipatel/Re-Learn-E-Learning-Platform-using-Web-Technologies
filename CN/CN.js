const checkboxes=document.querySelectorAll('.course-check');
        const progressBar=document.getElementById('progressBar');
        const checkedCountText=document.getElementById('checkedCount');
        function updateProgress(){
            const totalCheckboxes=checkboxes.length;
            const checkedCheckboxes=document.querySelectorAll('.course-check:checked').length;
            const percentage=(checkedCheckboxes/totalCheckboxes)*100;
            progressBar.style.width=percentage+'%';
            checkedCountText.textContent=`${checkedCheckboxes} out of ${totalCheckboxes} completed`;
        }
        checkboxes.forEach(checkbox => 
        {
            checkbox.addEventListener('change',updateProgress);
        }
        );