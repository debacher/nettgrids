<?php
namespace Netthelp\nettgrids\ViewHelpers;
/**
 * ViewHelper zur Rückgabe eines geparsten tt_content Elementes
 * @author  Uwe Debacher 
 * @version 1.0.1 vom 15.07.2017 
 */

class ContentViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {
  // output html since TYPO3 8LTS
  protected $escapeOutput = false;

  /**
   * Parse tt_content element
   *
   * @param  int     UID des Content Element
   * @return   string  Geparstes Content Element
   */
  public function render($uid) {
    $conf = array( // config
      'tables' => 'tt_content',
      'source' => $uid,
      'dontCheckPid' => 1
    );
    return $this->objectManager->get('TYPO3\CMS\Frontend\ContentObject\RecordsContentObject')->render($conf);
  }
}
