<?php
namespace Netthelp\nettgrids\ViewHelpers;
/**
  * ViewHelper zur Rückgabe einer Liste von Bildern in einem Verzeichnis
  * @author  Uwe Debacher 
  * @version 1.0.1 vom 15.07.2017 
 */

class VerzeichnisViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
  // output html since TYPO3 8LTS
  protected $escapeOutput = false;

  /**
   * Hole die Dateien im Pfad
   *
   * @param  verzeichnis $string mit dem Verzeichnispfad 
   * @return array  die Liste der Dateien mit Pfad 
   */
  public function render($verzeichnis) {
    $root=$_SERVER['DOCUMENT_ROOT'];
    $pfad=str_replace("1:", "/fileadmin", $verzeichnis);
    $dateien=array();

    $d = scandir($root.$pfad);

    foreach ($d as $eintrag) {
     if (is_file($root.$pfad.$eintrag))
      if (in_array(substr($eintrag, -3), array('png', 'PNG', 'gif', 'GIF', 'jpg', 'JPG' ) ))
      $dateien[]= $pfad.$eintrag;
    }
    
    return ($dateien);

  }
}

