import type { DocumentNode } from 'graphql';
  export const typeDefs = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","description":{"kind":"StringValue","value":"ブログ記事の著者","block":true,"loc":{"start":0,"end":18}},"name":{"kind":"Name","value":"Author","loc":{"start":24,"end":30}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":35,"end":37}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":39,"end":41}},"loc":{"start":39,"end":41}},"loc":{"start":39,"end":42}},"directives":[],"loc":{"start":35,"end":42}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":45,"end":49}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":51,"end":57}},"loc":{"start":51,"end":57}},"loc":{"start":51,"end":58}},"directives":[],"loc":{"start":45,"end":58}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":61,"end":70}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":72,"end":80}},"loc":{"start":72,"end":80}},"loc":{"start":72,"end":81}},"directives":[],"loc":{"start":61,"end":81}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":84,"end":93}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":95,"end":103}},"loc":{"start":95,"end":103}},"loc":{"start":95,"end":104}},"directives":[],"loc":{"start":84,"end":104}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"publishedAt","loc":{"start":107,"end":118}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":120,"end":128}},"loc":{"start":120,"end":128}},"directives":[],"loc":{"start":107,"end":128}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"revisedAt","loc":{"start":131,"end":140}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":142,"end":150}},"loc":{"start":142,"end":150}},"directives":[],"loc":{"start":131,"end":150}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"image","loc":{"start":153,"end":158}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"MicroCmsImage","loc":{"start":160,"end":173}},"loc":{"start":160,"end":173}},"directives":[],"loc":{"start":153,"end":173}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"blogs","loc":{"start":176,"end":181}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Blog","loc":{"start":184,"end":188}},"loc":{"start":184,"end":188}},"loc":{"start":184,"end":189}},"loc":{"start":183,"end":190}},"directives":[],"loc":{"start":176,"end":190}}],"loc":{"start":0,"end":192}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query","loc":{"start":198,"end":203}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":193,"end":203}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation","loc":{"start":210,"end":218}},"interfaces":[],"directives":[],"fields":[],"loc":{"start":205,"end":218}},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"DateTime","loc":{"start":227,"end":235}},"directives":[],"loc":{"start":220,"end":235}},{"kind":"ScalarTypeDefinition","name":{"kind":"Name","value":"Date","loc":{"start":244,"end":248}},"directives":[],"loc":{"start":237,"end":248}},{"kind":"ObjectTypeDefinition","description":{"kind":"StringValue","value":"MicroCMSの画像","block":true,"loc":{"start":250,"end":271}},"name":{"kind":"Name","value":"MicroCmsImage","loc":{"start":277,"end":290}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"url","loc":{"start":295,"end":298}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":300,"end":306}},"loc":{"start":300,"end":306}},"loc":{"start":300,"end":307}},"directives":[],"loc":{"start":295,"end":307}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"height","loc":{"start":310,"end":316}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":318,"end":321}},"loc":{"start":318,"end":321}},"directives":[],"loc":{"start":310,"end":321}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"width","loc":{"start":324,"end":329}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":331,"end":334}},"loc":{"start":331,"end":334}},"directives":[],"loc":{"start":324,"end":334}}],"loc":{"start":250,"end":336}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":349,"end":354}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"blog","loc":{"start":359,"end":363}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":364,"end":366}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":368,"end":370}},"loc":{"start":368,"end":370}},"loc":{"start":368,"end":371}},"directives":[],"loc":{"start":364,"end":371}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Blog","loc":{"start":374,"end":378}},"loc":{"start":374,"end":378}},"loc":{"start":374,"end":379}},"directives":[],"loc":{"start":359,"end":379}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"blogs","loc":{"start":382,"end":387}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Blog","loc":{"start":390,"end":394}},"loc":{"start":390,"end":394}},"loc":{"start":390,"end":395}},"loc":{"start":389,"end":396}},"loc":{"start":389,"end":397}},"directives":[],"loc":{"start":382,"end":397}}],"loc":{"start":337,"end":399}},{"kind":"ObjectTypeDefinition","description":{"kind":"StringValue","value":"ブログ記事","block":true,"loc":{"start":401,"end":416}},"name":{"kind":"Name","value":"Blog","loc":{"start":422,"end":426}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":431,"end":433}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":435,"end":437}},"loc":{"start":435,"end":437}},"loc":{"start":435,"end":438}},"directives":[],"loc":{"start":431,"end":438}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":441,"end":446}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":448,"end":454}},"loc":{"start":448,"end":454}},"loc":{"start":448,"end":455}},"directives":[],"loc":{"start":441,"end":455}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"body","loc":{"start":458,"end":462}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":464,"end":470}},"loc":{"start":464,"end":470}},"loc":{"start":464,"end":471}},"directives":[],"loc":{"start":458,"end":471}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"image","loc":{"start":474,"end":479}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"MicroCmsImage","loc":{"start":481,"end":494}},"loc":{"start":481,"end":494}},"directives":[],"loc":{"start":474,"end":494}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"category","loc":{"start":497,"end":505}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Category","loc":{"start":507,"end":515}},"loc":{"start":507,"end":515}},"loc":{"start":507,"end":516}},"directives":[],"loc":{"start":497,"end":516}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"author","loc":{"start":519,"end":525}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Author","loc":{"start":527,"end":533}},"loc":{"start":527,"end":533}},"loc":{"start":527,"end":534}},"directives":[],"loc":{"start":519,"end":534}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":537,"end":546}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":548,"end":556}},"loc":{"start":548,"end":556}},"loc":{"start":548,"end":557}},"directives":[],"loc":{"start":537,"end":557}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":560,"end":569}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":571,"end":579}},"loc":{"start":571,"end":579}},"loc":{"start":571,"end":580}},"directives":[],"loc":{"start":560,"end":580}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"publishedAt","loc":{"start":583,"end":594}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":596,"end":604}},"loc":{"start":596,"end":604}},"directives":[],"loc":{"start":583,"end":604}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"revisedAt","loc":{"start":607,"end":616}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":618,"end":626}},"loc":{"start":618,"end":626}},"directives":[],"loc":{"start":607,"end":626}}],"loc":{"start":401,"end":628}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":641,"end":646}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"categories","loc":{"start":651,"end":661}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Category","loc":{"start":664,"end":672}},"loc":{"start":664,"end":672}},"loc":{"start":664,"end":673}},"loc":{"start":663,"end":674}},"loc":{"start":663,"end":675}},"directives":[],"loc":{"start":651,"end":675}}],"loc":{"start":629,"end":677}},{"kind":"ObjectTypeDefinition","description":{"kind":"StringValue","value":"ブログ記事のカテゴリー","block":true,"loc":{"start":679,"end":700}},"name":{"kind":"Name","value":"Category","loc":{"start":706,"end":714}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":719,"end":721}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":723,"end":725}},"loc":{"start":723,"end":725}},"loc":{"start":723,"end":726}},"directives":[],"loc":{"start":719,"end":726}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":729,"end":733}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":735,"end":741}},"loc":{"start":735,"end":741}},"loc":{"start":735,"end":742}},"directives":[],"loc":{"start":729,"end":742}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":745,"end":754}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":756,"end":764}},"loc":{"start":756,"end":764}},"loc":{"start":756,"end":765}},"directives":[],"loc":{"start":745,"end":765}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"updatedAt","loc":{"start":768,"end":777}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":779,"end":787}},"loc":{"start":779,"end":787}},"loc":{"start":779,"end":788}},"directives":[],"loc":{"start":768,"end":788}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"publishedAt","loc":{"start":791,"end":802}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":804,"end":812}},"loc":{"start":804,"end":812}},"directives":[],"loc":{"start":791,"end":812}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"revisedAt","loc":{"start":815,"end":824}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"DateTime","loc":{"start":826,"end":834}},"loc":{"start":826,"end":834}},"directives":[],"loc":{"start":815,"end":834}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"blogs","loc":{"start":837,"end":842}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Blog","loc":{"start":845,"end":849}},"loc":{"start":845,"end":849}},"loc":{"start":845,"end":850}},"loc":{"start":844,"end":851}},"loc":{"start":844,"end":852}},"directives":[],"loc":{"start":837,"end":852}}],"loc":{"start":679,"end":854}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":867,"end":872}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"comment","loc":{"start":877,"end":884}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":885,"end":887}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":889,"end":891}},"loc":{"start":889,"end":891}},"loc":{"start":889,"end":892}},"directives":[],"loc":{"start":885,"end":892}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment","loc":{"start":895,"end":902}},"loc":{"start":895,"end":902}},"directives":[],"loc":{"start":877,"end":902}}],"loc":{"start":855,"end":904}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation","loc":{"start":918,"end":926}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"postCommentOnLink","loc":{"start":931,"end":948}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"linkId","loc":{"start":949,"end":955}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":957,"end":959}},"loc":{"start":957,"end":959}},"loc":{"start":957,"end":960}},"directives":[],"loc":{"start":949,"end":960}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"body","loc":{"start":962,"end":966}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":968,"end":974}},"loc":{"start":968,"end":974}},"loc":{"start":968,"end":975}},"directives":[],"loc":{"start":962,"end":975}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment","loc":{"start":978,"end":985}},"loc":{"start":978,"end":985}},"loc":{"start":978,"end":986}},"directives":[],"loc":{"start":931,"end":986}}],"loc":{"start":906,"end":988}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Comment","loc":{"start":995,"end":1002}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":1007,"end":1009}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1011,"end":1013}},"loc":{"start":1011,"end":1013}},"loc":{"start":1011,"end":1014}},"directives":[],"loc":{"start":1007,"end":1014}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"body","loc":{"start":1017,"end":1021}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1023,"end":1029}},"loc":{"start":1023,"end":1029}},"loc":{"start":1023,"end":1030}},"directives":[],"loc":{"start":1017,"end":1030}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"link","loc":{"start":1033,"end":1037}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Link","loc":{"start":1039,"end":1043}},"loc":{"start":1039,"end":1043}},"directives":[],"loc":{"start":1033,"end":1043}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"postedBy","loc":{"start":1046,"end":1054}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":1056,"end":1060}},"loc":{"start":1056,"end":1060}},"directives":[],"loc":{"start":1046,"end":1060}}],"loc":{"start":990,"end":1062}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":1075,"end":1080}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"feed","loc":{"start":1085,"end":1089}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"filterNeedle","loc":{"start":1090,"end":1102}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1104,"end":1110}},"loc":{"start":1104,"end":1110}},"directives":[],"loc":{"start":1090,"end":1110}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"skip","loc":{"start":1112,"end":1116}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1118,"end":1121}},"loc":{"start":1118,"end":1121}},"directives":[],"loc":{"start":1112,"end":1121}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"take","loc":{"start":1123,"end":1127}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int","loc":{"start":1129,"end":1132}},"loc":{"start":1129,"end":1132}},"directives":[],"loc":{"start":1123,"end":1132}}],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Link","loc":{"start":1136,"end":1140}},"loc":{"start":1136,"end":1140}},"loc":{"start":1136,"end":1141}},"loc":{"start":1135,"end":1142}},"loc":{"start":1135,"end":1143}},"directives":[],"loc":{"start":1085,"end":1143}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"link","loc":{"start":1146,"end":1150}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":1151,"end":1153}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1155,"end":1157}},"loc":{"start":1155,"end":1157}},"loc":{"start":1155,"end":1158}},"directives":[],"loc":{"start":1151,"end":1158}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Link","loc":{"start":1161,"end":1165}},"loc":{"start":1161,"end":1165}},"directives":[],"loc":{"start":1146,"end":1165}}],"loc":{"start":1063,"end":1167}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Mutation","loc":{"start":1181,"end":1189}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"postLink","loc":{"start":1194,"end":1202}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"url","loc":{"start":1203,"end":1206}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1208,"end":1214}},"loc":{"start":1208,"end":1214}},"loc":{"start":1208,"end":1215}},"directives":[],"loc":{"start":1203,"end":1215}},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"description","loc":{"start":1217,"end":1228}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1230,"end":1236}},"loc":{"start":1230,"end":1236}},"loc":{"start":1230,"end":1237}},"directives":[],"loc":{"start":1217,"end":1237}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Link","loc":{"start":1240,"end":1244}},"loc":{"start":1240,"end":1244}},"loc":{"start":1240,"end":1245}},"directives":[],"loc":{"start":1194,"end":1245}}],"loc":{"start":1169,"end":1247}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Link","loc":{"start":1254,"end":1258}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":1263,"end":1265}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1267,"end":1269}},"loc":{"start":1267,"end":1269}},"loc":{"start":1267,"end":1270}},"directives":[],"loc":{"start":1263,"end":1270}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description","loc":{"start":1273,"end":1284}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1286,"end":1292}},"loc":{"start":1286,"end":1292}},"loc":{"start":1286,"end":1293}},"directives":[],"loc":{"start":1273,"end":1293}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"url","loc":{"start":1296,"end":1299}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1301,"end":1307}},"loc":{"start":1301,"end":1307}},"loc":{"start":1301,"end":1308}},"directives":[],"loc":{"start":1296,"end":1308}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"comments","loc":{"start":1311,"end":1319}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment","loc":{"start":1322,"end":1329}},"loc":{"start":1322,"end":1329}},"loc":{"start":1322,"end":1330}},"loc":{"start":1321,"end":1331}},"loc":{"start":1321,"end":1332}},"directives":[],"loc":{"start":1311,"end":1332}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"postedBy","loc":{"start":1335,"end":1343}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":1345,"end":1349}},"loc":{"start":1345,"end":1349}},"directives":[],"loc":{"start":1335,"end":1349}}],"loc":{"start":1249,"end":1351}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":1364,"end":1369}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"info","loc":{"start":1374,"end":1378}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1380,"end":1386}},"loc":{"start":1380,"end":1386}},"loc":{"start":1380,"end":1387}},"directives":[],"loc":{"start":1374,"end":1387}}],"loc":{"start":1352,"end":1389}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":1402,"end":1407}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"meshi","loc":{"start":1412,"end":1417}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":1418,"end":1420}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1422,"end":1424}},"loc":{"start":1422,"end":1424}},"loc":{"start":1422,"end":1425}},"directives":[],"loc":{"start":1418,"end":1425}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Meshi","loc":{"start":1428,"end":1433}},"loc":{"start":1428,"end":1433}},"directives":[],"loc":{"start":1412,"end":1433}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"meshis","loc":{"start":1436,"end":1442}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Meshi","loc":{"start":1445,"end":1450}},"loc":{"start":1445,"end":1450}},"loc":{"start":1445,"end":1451}},"loc":{"start":1444,"end":1452}},"loc":{"start":1444,"end":1453}},"directives":[],"loc":{"start":1436,"end":1453}}],"loc":{"start":1390,"end":1455}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Meshi","loc":{"start":1462,"end":1467}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":1472,"end":1474}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1476,"end":1478}},"loc":{"start":1476,"end":1478}},"loc":{"start":1476,"end":1479}},"directives":[],"loc":{"start":1472,"end":1479}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"articleId","loc":{"start":1482,"end":1491}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1493,"end":1499}},"loc":{"start":1493,"end":1499}},"loc":{"start":1493,"end":1500}},"directives":[],"loc":{"start":1482,"end":1500}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"title","loc":{"start":1503,"end":1508}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1510,"end":1516}},"loc":{"start":1510,"end":1516}},"loc":{"start":1510,"end":1517}},"directives":[],"loc":{"start":1503,"end":1517}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"imageUrl","loc":{"start":1520,"end":1528}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1530,"end":1536}},"loc":{"start":1530,"end":1536}},"loc":{"start":1530,"end":1537}},"directives":[],"loc":{"start":1520,"end":1537}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"storeName","loc":{"start":1540,"end":1549}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1551,"end":1557}},"loc":{"start":1551,"end":1557}},"loc":{"start":1551,"end":1558}},"directives":[],"loc":{"start":1540,"end":1558}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"address","loc":{"start":1561,"end":1568}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1570,"end":1576}},"loc":{"start":1570,"end":1576}},"loc":{"start":1570,"end":1577}},"directives":[],"loc":{"start":1561,"end":1577}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"siteUrl","loc":{"start":1580,"end":1587}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1589,"end":1595}},"loc":{"start":1589,"end":1595}},"loc":{"start":1589,"end":1596}},"directives":[],"loc":{"start":1580,"end":1596}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"publishedDate","loc":{"start":1599,"end":1612}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date","loc":{"start":1614,"end":1618}},"loc":{"start":1614,"end":1618}},"loc":{"start":1614,"end":1619}},"directives":[],"loc":{"start":1599,"end":1619}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"latitude","loc":{"start":1622,"end":1630}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float","loc":{"start":1632,"end":1637}},"loc":{"start":1632,"end":1637}},"loc":{"start":1632,"end":1638}},"directives":[],"loc":{"start":1622,"end":1638}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"longitude","loc":{"start":1641,"end":1650}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float","loc":{"start":1652,"end":1657}},"loc":{"start":1652,"end":1657}},"loc":{"start":1652,"end":1658}},"directives":[],"loc":{"start":1641,"end":1658}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":1661,"end":1670}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date","loc":{"start":1672,"end":1676}},"loc":{"start":1672,"end":1676}},"loc":{"start":1672,"end":1677}},"directives":[],"loc":{"start":1661,"end":1677}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"municipality","loc":{"start":1680,"end":1692}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Municipality","loc":{"start":1694,"end":1706}},"loc":{"start":1694,"end":1706}},"directives":[],"loc":{"start":1680,"end":1706}}],"loc":{"start":1457,"end":1708}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":1721,"end":1726}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"municipality","loc":{"start":1731,"end":1743}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":1744,"end":1746}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1748,"end":1750}},"loc":{"start":1748,"end":1750}},"loc":{"start":1748,"end":1751}},"directives":[],"loc":{"start":1744,"end":1751}}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"Municipality","loc":{"start":1754,"end":1766}},"loc":{"start":1754,"end":1766}},"directives":[],"loc":{"start":1731,"end":1766}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"municipalities","loc":{"start":1769,"end":1783}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Municipality","loc":{"start":1786,"end":1798}},"loc":{"start":1786,"end":1798}},"loc":{"start":1786,"end":1799}},"loc":{"start":1785,"end":1800}},"loc":{"start":1785,"end":1801}},"directives":[],"loc":{"start":1769,"end":1801}}],"loc":{"start":1709,"end":1803}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Municipality","loc":{"start":1810,"end":1822}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":1827,"end":1829}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1831,"end":1833}},"loc":{"start":1831,"end":1833}},"loc":{"start":1831,"end":1834}},"directives":[],"loc":{"start":1827,"end":1834}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":1837,"end":1841}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1843,"end":1849}},"loc":{"start":1843,"end":1849}},"loc":{"start":1843,"end":1850}},"directives":[],"loc":{"start":1837,"end":1850}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"createdAt","loc":{"start":1853,"end":1862}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Date","loc":{"start":1864,"end":1868}},"loc":{"start":1864,"end":1868}},"loc":{"start":1864,"end":1869}},"directives":[],"loc":{"start":1853,"end":1869}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"meshis","loc":{"start":1872,"end":1878}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Meshi","loc":{"start":1881,"end":1886}},"loc":{"start":1881,"end":1886}},"loc":{"start":1880,"end":1887}},"loc":{"start":1880,"end":1888}},"directives":[],"loc":{"start":1872,"end":1888}}],"loc":{"start":1805,"end":1890}},{"kind":"ObjectTypeExtension","name":{"kind":"Name","value":"Query","loc":{"start":1903,"end":1908}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user","loc":{"start":1913,"end":1917}},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"id","loc":{"start":1918,"end":1920}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1922,"end":1924}},"loc":{"start":1922,"end":1924}},"loc":{"start":1922,"end":1925}},"directives":[],"loc":{"start":1918,"end":1925}}],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":1928,"end":1932}},"loc":{"start":1928,"end":1932}},"loc":{"start":1928,"end":1933}},"directives":[],"loc":{"start":1913,"end":1933}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"users","loc":{"start":1936,"end":1941}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"User","loc":{"start":1944,"end":1948}},"loc":{"start":1944,"end":1948}},"loc":{"start":1944,"end":1949}},"loc":{"start":1943,"end":1950}},"loc":{"start":1943,"end":1951}},"directives":[],"loc":{"start":1936,"end":1951}}],"loc":{"start":1891,"end":1953}},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"User","loc":{"start":1960,"end":1964}},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"id","loc":{"start":1969,"end":1971}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID","loc":{"start":1973,"end":1975}},"loc":{"start":1973,"end":1975}},"loc":{"start":1973,"end":1976}},"directives":[],"loc":{"start":1969,"end":1976}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"name","loc":{"start":1979,"end":1983}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":1985,"end":1991}},"loc":{"start":1985,"end":1991}},"loc":{"start":1985,"end":1992}},"directives":[],"loc":{"start":1979,"end":1992}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"displayName","loc":{"start":1995,"end":2006}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2008,"end":2014}},"loc":{"start":2008,"end":2014}},"loc":{"start":2008,"end":2015}},"directives":[],"loc":{"start":1995,"end":2015}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"email","loc":{"start":2018,"end":2023}},"arguments":[],"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2025,"end":2031}},"loc":{"start":2025,"end":2031}},"loc":{"start":2025,"end":2032}},"directives":[],"loc":{"start":2018,"end":2032}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"iconImageURL","loc":{"start":2035,"end":2047}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2049,"end":2055}},"loc":{"start":2049,"end":2055}},"directives":[],"loc":{"start":2035,"end":2055}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"description","loc":{"start":2058,"end":2069}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2071,"end":2077}},"loc":{"start":2071,"end":2077}},"directives":[],"loc":{"start":2058,"end":2077}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"contents","loc":{"start":2080,"end":2088}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2090,"end":2096}},"loc":{"start":2090,"end":2096}},"directives":[],"loc":{"start":2080,"end":2096}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"twitterProfileUrl","loc":{"start":2099,"end":2116}},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String","loc":{"start":2118,"end":2124}},"loc":{"start":2118,"end":2124}},"directives":[],"loc":{"start":2099,"end":2124}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"links","loc":{"start":2127,"end":2132}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Link","loc":{"start":2135,"end":2139}},"loc":{"start":2135,"end":2139}},"loc":{"start":2135,"end":2140}},"loc":{"start":2134,"end":2141}},"directives":[],"loc":{"start":2127,"end":2141}},{"kind":"FieldDefinition","name":{"kind":"Name","value":"comments","loc":{"start":2144,"end":2152}},"arguments":[],"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Comment","loc":{"start":2155,"end":2162}},"loc":{"start":2155,"end":2162}},"loc":{"start":2155,"end":2163}},"loc":{"start":2154,"end":2164}},"directives":[],"loc":{"start":2144,"end":2164}}],"loc":{"start":1955,"end":2166}}],"loc":{"start":0,"end":2167}} as unknown as DocumentNode