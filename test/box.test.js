const { expect } = require('chai')
const Box = artifacts.require('Box');
const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
contract('Box', function ([owner, other]) {
    const value = new BN('42')
    beforeEach(async function () {
        this.box = await Box.deployed({ from: owner });
    });

    it('retrieve return a value previously stored', async function () {
        await this.box.store(value, { from: owner });
        expect((await this.box.retrieve())).to.be.bignumber.equal('42');
    });

    it('store emits an event', async function () {
        const receipt = await this.box.store(value, { from: owner });
        expectEvent(receipt, 'valueChange', { newValue: value })
    })

    it('non owner can not store a value', async function () {
        await expectRevert(
            this.box.store(value, { from: other }),
            'Unauthorized'
        )
    })
})