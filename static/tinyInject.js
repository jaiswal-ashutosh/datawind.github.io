var script=document.createElement('script');
script.type='text/javascript';
script.src="https://cdn.tiny.cloud/1/no-api-key/tinymce/4/tinymce.min.js"
document.head.appendChild(script);

script.onload=function(){
tinymce.init({
  
  selector: '#id_content',
  plugins: [
    'advlist autolink link image lists charmap print preview hr anchor pagebreak',
    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
    'table emoticons template paste help'
  
  ],
  toolbar: 'undo redo | styleselect | sizeselect | bold italic | fontselect |  fontsizeselect | alignleft aligncenter alignright alignjustify | ' +
    'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
    'forecolor backcolor emoticons | help',
   fontsize_formats: "8pt 10pt 12pt 14pt 18pt 24pt 36pt",  
  menu: {
    favs: {title: 'My Favorites', items: 'code visualaid | searchreplace | emoticons'}
  },
  menubar: 'favs file edit view insert format tools table help',
  content_css: 'css/content.css'
});
}