//contact buys membership
"MATCH (b:Contact {userId: 'asdfasd'})
CREATE (a:Membership {Membership_name: 'blah', term: 'tsdf', type: 'asdf', price: 'asdfs'})
(b)-[:PURCHASES]->(a)"
//family membership repeat
"MATCH (b:Contact {userId: 'asdfasd'})-[h:Household]-()
CREATE (a:Membership {Membership_name: 'blah', term: 'tsdf', type: 'asdf', price: 'asdfs'})
CREATE (:Contact {name: 'phil'})-[:BELONGS_TO]->(h)
CREATE (h)-[:LIVES_AT]->(:Address {addressy stuff})
(b)-[:PURCHASES]->(a)"
//company membership
"MATCH (b:Contact {userId: 'asdfasd'})-[h:Household]-()
MATCH (c:Company)
CREATE (b)-[:WORKS_FOR]->(c)"

"MATCH (b:Contact {userId: 'asdfasd'})-[h:Household]-()
MATCH (c:School)
CREATE (b)-[:WORKS_FOR]->(c)"