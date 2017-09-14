<?php
require "bd/verbDB.class.php";
header('Content-type: text/plain; charset=utf-8');
header('Cache-COntrol: no-store, no-cache');
header('Expires: ' . date('r'));

if(!empty($_GET['infinitive'])) {
    $value = $_GET['infinitive'];
    $verb = new verbDB;
    $result = $verb->getVerbs($value);
    }
            if (is_array($result) && (count($result) > 0)) {
              echo '<table class="result-table">
                      <thead class="result-table__row-head">
                        <tr class="result-table__th-row">
                          <th class="result-table__th-field">Infinitive<br/>(первая форма глагола)
                          </th>
                          <th class="result-table__th-field">Past<br/>(вторая форма глагола)
                          </th>
                          <th class="result-table__th-field">Past participle<br/>(третья форма глагола)
                          </th>
                          <th class="result-table__th-field">Перевод
                          </th>
                        </tr>
                      </thead>';
              echo
                '<tbody class="result-table__row-body">';
              foreach ($result as $item) {
                echo
                      '<tr class="result-table__tb-row">'
                        .'<td class="result-table__tb-field">'.$item['infinitive'].'</td>'
                        .'<td class="result-table__tb-field">'.$item['past'].'</td>'
                        .'<td class="result-table__tb-field">'.$item['past_participle'].'</td>'
                        .'<td class="result-table__tb-field">'.$item['translate_rus'].'</td>'
                      .'</tr>';
              }
              echo "</tbody></table>";

            } else {
              echo '<div class="result">
                      <div class="result__no-matches">Нет совпадений:
                      </div>
                      <ul class="result__row">
                        <li class="result__list">1. Глагол правильный
                        </li>
                        <li class="result__list">2. Проверьте написание
                        </li>
                      </ul>
                    </div>';
            }

?>