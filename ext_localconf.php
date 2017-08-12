<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function($extConfString)     {
        // Add pageTS config  
        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:nettgrids/Configuration/TypoScript/tsconfig.ts">');  

    },$_EXTCONF  
);
