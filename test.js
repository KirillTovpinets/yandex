const assert = require('assert');
const LinkedList = require('./src');

const list = new LinkedList();
describe('list data structure', () => {
    it('list should add data', () => {
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        assert.equal(list.length, 4);
    })
    it('list should get data', () => {
        assert.equal(list.getList().join(''), [1, 2, 3, 4].join(''))
    })
    it('list should delete data', () => {
        list.remove(2);
        assert.equal(list.getList().join(''), [1, 3, 4].join(''))
    })
    it('list should insertAfter data', () => {
        list.insertAfter(1, 3);
        list.insertAfter(8, 1);
        assert.equal(list.getList().join(''), [1, 8, 3, 1, 4].join(''))
    })
})