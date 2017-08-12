tx_gridelements {
    # boolean; Usually if the ID of the TSconfig is the same like the record ID of grid elements,
    # the configuration of the TSconfig overrides the record configuration recursively (!).
    # If this option is set the record configuration overrides the TSconfig.
    overruleRecords = 1
    # string; With this option you can disable single layouts. Use the record or TSconfig ID.
    #excludeLayoutIds = 3,slider

    setup {
        # mixed; This will be the layout ID. It can be a string or a integer.
                

        udpanel {
          title = UDPanel
          description = Bootstrap Panel mit wählbarer Klasse 
          icon = EXT:nettgrids/Resources/Public/Bilder/udpanel.png
          frame = 2
          config {
              colCount = 1
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = Inhalt
                      colPos = 110
                    } #1
                  } #columns
                } #1
              } #rows
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_udpanel.xml
        } #udpanel

        galerie {
          title = Galerie
          description = Galerie für Bilder aus einem Verzeichnis
          # integer; Colored frame. 0, 1 = red, 2 = green, 3 = blue
          frame = 2
          icon = EXT:nettgrids/Resources/Public/Bilder/vgalerie.png
          config {
              colCount = 1
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = Inhalt
                      colPos = 110
                    } #1
                  } #columns
                } #1
              } #rows
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_galerie.xml
        } #gallerie 
        
        verzeichnisslider {
          title = Verzeichnisslider
          description = Slider für Bilder aus einem Verzeichnis
          icon = EXT:nettgrids/Resources/Public/Bilder/vslider.png
          # integer; Colored frame. 0, 1 = red, 2 = green, 3 = blue
          frame = 2
          config {
              colCount = 1
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = Inhalt
                      colPos = 110
                    } #1
                  } #columns
                } #1
              } #rows
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_vslider.xml
        } #verzeichnisslider

        bilderslider {
          title = Bilderslider
          description = Slider nur für Bilder ohne extra Content-Elemente 
          frame = 2
          icon = EXT:nettgrids/Resources/Public/Bilder/imageslider.png
          config {
              colCount = 1
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = Inhalt
                      colPos = 110
                    } #1
                  } #columns
                } #1
              } #rows
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_bilderslider.xml
        } #bilderslider
        
        contentslider {
          title = Contentslider
          description = Die kompletten Inhaltselemente Sliden 
          icon = EXT:nettgrids/Resources/Public/Bilder/contentslider.png
          frame = 2
          config {
              colCount = 1
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = Inhalt
                      colPos = 110
                    } #1
                  } #columns
                } #1
              } #rows
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_contentslider.xml
        } #contentslider
        
        tabs {
          title = Tabs mit Elementen
          description = Die Inhaltselemente werden in Tabs angeordnet
          icon = EXT:nettgrids/Resources/Public/Bilder/tabs.png
#          topLevelLayout = 1
          frame = 2
          config {
              colCount = 1
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = TabInhalt
                      colPos = 110
                    } #1
                  } #columns
                } #1
              } #rows
          } #config
        } #tabs
        
        accordion {
          title = Accordion
          description = Die Inhaltselemente werden als Akkordion angeordnet 
          icon = EXT:nettgrids/Resources/Public/Bilder/accordion.png
          frame = 2
          config {
              colCount = 1
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = Inhalt
                      colPos = 110
                    } #1
                  } #columns
                } #1
              } #rows
          } #config
        } #accordion
        
        udroundbox {
          title = UDRoundBox
          description = Box mit Rahmen, Hintergrund und runden Ecken 
          icon = EXT:nettgrids/Resources/Public/Bilder/UDroundBox.png
          frame = 2
          config {
              colCount = 1
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = Inhalt
                      colPos = 110
                    } #1
                  } #columns
                } #1
              } #rows
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_udroundbox.xml
        } #udroundbox

        spalten2 {
          title = 2-spaltig flexibel
          description = 2 Spalten, Breiten-Verhältnis in einem im 12er-Rester wählbar
          icon = EXT:nettgrids/Resources/Public/Bilder/spalten2.png
          frame = 2
          config {
              colCount = 2
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = SpalteLinks
                      colPos = 110
                    }
                    2 {
                      name = SpalteRechts
                      colPos = 111
                    }
                  }
                }
              }
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_spalten2.xml
        } #spalten2

        spalten3 {
          title = 3-spaltig flexibel
          description = 3 Spalten, Breiten-Verhältnis in einem im 12er-Rester wählbar
          icon = EXT:nettgrids/Resources/Public/Bilder/spalten3.png
          frame = 2
          config {
              colCount = 3
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = SpalteLinks
                      colPos = 110
                    }
                    2 {
                      name = SpalteMitte
                      colPos = 111
                    }
                    3 {
                      name = SpalteRechts
                      colPos = 112
                    }
                  }
                }
              }
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_spalten3.xml
        } #spalten3

        spalten4 {
          title = 4-spaltig flexibel
          description = 4 Spalten, Breiten-Verhältnis in einem im 12er-Rester wählbar
          icon = EXT:nettgrids/Resources/Public/Bilder/spalten4.png
          frame = 2
          config {
              colCount = 4
              rowCount = 1
              rows {
                1 {
                  columns {
                    1 {
                      name = SpalteLinks
                      colPos = 110
                    }
                    2 {
                      name = SpalteMitteLinks
                      colPos = 111
                    }
                    3 {
                      name = SpalteMitteRechts
                      colPos = 112
                    }
                    4 {
                      name = SpalteRechts
                      colPos = 113
                    }
                  }
                }
              }
          } #config
          flexformDS = FILE:EXT:nettgrids/Configuration/FlexForm/flexform_spalten4.xml
        } #spalten4        
    } #setup
} #tx_gridelements
