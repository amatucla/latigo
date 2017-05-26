<?php 
  function getDirectoryList($dir,$recursive = FALSE) {
    if (is_dir($dir)) {
		for ($list = array(),$handle = opendir($dir); (FALSE !== ($file = readdir($handle)));) {
			if (($file != '.' && $file != '..') && (file_exists($path = $dir.'/'.$file))) {
				if (is_dir($path) && ($recursive)) {
					$list = array_merge($list, getDirectoryList($path, TRUE));
				} else {
					$entry = array('filename' => $file, 'dirpath' => $dir);

					//---------------------------------------------------------//
					//                     - SECTION 1 -                       //
					//          Actions to be performed on ALL ITEMS           //
					//-----------------    Begin Editable    ------------------//

					$entry['modtime'] = filemtime($path);

					//-----------------     End Editable     ------------------//
					do if (!is_dir($path)) {
						//---------------------------------------------------------//
						//                     - SECTION 2 -                       //
						//         Actions to be performed on FILES ONLY           //
						//-----------------    Begin Editable    ------------------//

						$entry['size'] = filesize($path);
						$entry['path'] = $path;
						if (strstr(pathinfo($path,PATHINFO_BASENAME),'log')) {
							if (!$entry['handle'] = fopen($path,r)) $entry['handle'] = "FAIL";
						}
						 
						//-----------------     End Editable     ------------------//
						break;
					} else {
						//---------------------------------------------------------//
						//                     - SECTION 3 -                       //
						//       Actions to be performed on DIRECTORIES ONLY       //
						//-----------------    Begin Editable    ------------------//

						//-----------------     End Editable     ------------------//
						break;
					} while (FALSE);
					$list[] = $entry;
				}
			}
		}
		closedir($handle);
		return $list;
    } else return FALSE;
  }
  
header('Content-type: text/cache-manifest');
?>
CACHE MANIFEST
# 2013-12-07:v3

CACHE:
index.html
<?php 
$files = getDirectoryList($_SERVER['DOCUMENT_ROOT'].'css/images');
foreach ($files as $f) {
   echo "
css/images/" . $f['filename'];
}

$files = getDirectoryList($_SERVER['DOCUMENT_ROOT'].'whips', true);
foreach ($files as $f) {
   echo "
" . str_replace('/htdocs/public/latigo/','',$f['path']);
}
?>

img/apple-touch-icon-114x114-precomposed.png
img/apple-touch-icon-72x72-precomposed.png
img/apple-touch-icon-iphone-precomposed.png

css/app.css
css/jquery.mobile.whips.css
css/jquery.mobile.structure.min.css

js/app.js
js/custom-init.js
js/jquery.min.js
js/jquery.mobile.min.js
