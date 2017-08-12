<?php
namespace Netthelp\nettgrids\ViewHelpers;
/**
 * ViewHelper zur Rückgabe eines Array aus einer Liste
 * @author  Uwe Debacher 
 * @version 1.0.1 vom 15.07.2017 
 */

class ExplodeViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
  // output html since TYPO3 8LTS
  protected $escapeOutput = false;

  /**
   * Wandle Liste in Array um
   *
   * @param  string $string mit delimiter separierte Liste von Elementen 
   * @param  string $delimiter Trennzeichen in der Liste, in der Regel das ,
   * @return array  die Liste aus dem String als Array
   */
  public function render($string, $delimiter) {

    return explode($delimiter, $string);

  }
}

