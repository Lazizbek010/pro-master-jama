$(document).ready(function() {
    let calcInfo = {
        inst: [{
                title: 'EURUSD',
                value: 100000,
                lastVal: 'USD'
            },
            {
                title: 'EURCHF',
                value: 100000,
                lastVal: 'CHF'
            },
            {
                title: 'EURJPY',
                value: 100000,
                lastVal: 'JPY'
            },
            {
                title: 'EURCAD',
                value: 100000,
                lastVal: 'CAD'
            },
            {
                title: 'EURGBP',
                value: 100000,
                lastVal: 'GBP'
            },
            {
                title: 'USDCHF',
                value: 100000,
                lastVal: 'CHF'
            },
            {
                title: 'USDJPY',
                value: 100000,
                lastVal: 'JPY'
            },
            {
                title: 'USDCAD',
                value: 100000,
                lastVal: 'CAD'
            },
            {
                title: 'CHFJPY',
                value: 100000,
                lastVal: 'JPY'
            },
            {
                title: 'GBPCAD',
                value: 100000,
                lastVal: 'CAD'
            },
            {
                title: 'GBPUSD',
                value: 100000,
                lastVal: 'USD'
            },
            {
                title: 'GBPCHF',
                value: 100000,
                lastVal: 'CHF'
            },
            {
                title: 'GBPJPY',
                value: 100000,
                lastVal: 'JPY'
            },
            {
                title: 'CADJPY',
                value: 100000,
                lastVal: 'JPY'
            },
            {
                title: 'CADCHF',
                value: 100000,
                lastVal: 'CHF'
            },
            {
                title: 'AUDNZD',
                value: 100000,
                lastVal: 'NZD'
            },
            {
                title: 'AUDCAD',
                value: 100000,
                lastVal: 'CAD'
            },
            {
                title: 'AUDCHF',
                value: 100000,
                lastVal: 'CHF'
            },
            {
                title: 'AUDJPY',
                value: 100000,
                lastVal: 'JPY'
            },
            {
                title: 'EURAUD',
                value: 100000,
                lastVal: 'AUD'
            },
            {
                title: 'AUDUSD',
                value: 100000,
                lastVal: 'USD'
            },
            {
                title: 'EURNZD',
                value: 100000,
                lastVal: 'NZD'
            },
            {
                title: 'NZDUSD',
                value: 100000,
                lastVal: 'USD'
            },
            {
                title: 'GBPAUD',
                value: 100000,
                lastVal: 'USD'
            },
            {
                title: 'GBPNZD',
                value: 100000,
                lastVal: 'NZD'
            },
            {
                title: 'NZDCHF',
                value: 100000,
                lastVal: 'CHF',
            },
            {
                title: 'NZDCHF',
                value: 100000,
                lastVal: 'CHF'
            },
            {
                title: 'NZDJPY',
                value: 100000,
                lastVal: 'JPY'
            },
            {
                title: 'XAUUSD',
                value: 100,
                lastVal: 'XAU'
            },
            {
                title: 'XAGUSD',
                value: 5000,
                lastVal: 'USD'
            },
            {
                title: 'XAGEUR',
                value: 100,
                lastVal: 'EUR'
            },
            {
                title: 'BTCUSD',
                value: 1,
                lastVal: 'USD'
            },
            {
                title: 'ETHUSD',
                value: 1,
                lastVal: 'USD'
            },
            {
                title: 'LTCUSD',
                value: 10,
                lastVal: 'USD'
            },
        ],
        pul: [{
                title: 'USD',
                valuteChar: '$'
            },
            {
                title: 'EUR',
                valuteChar: '€'
            },
            {
                title: 'AUD',
                valuteChar: 'AUR'
            },
            {
                title: 'CAD',
                valuteChar: 'CAD'
            },
            {
                title: 'CHF',
                valuteChar: 'CHF'
            },
            {
                title: 'GBP',
                valuteChar: '£'

            },
            {
                title: 'JPY',
                valuteChar: '¥'
            },
            {
                title: 'NZD',
                valuteChar: 'NZD'
            }
        ],
        valInCalc: {
            inst: {
                type: 0,
                val: 0,
            },
            oper: 0,
            pul: {
                type: 0,
                val: '',
            },
            balance: 0,
            stopLoss: 0,
            risk: {
                type: 0,
                value: 0,
            },
            askprice: 0,
        },
        otpValues: {
            lot: 0,
            minus: 0,
            balance: 0,
        }
    }

    function calcRes() {
        console.log((calcInfo.valInCalc.risk.type == 0 ? (calcInfo.valInCalc.risk.value / 100) : (calcInfo.valInCalc.risk.value / (calcInfo.valInCalc.balance / 100))))
        calcInfo.otpValues.lot = (
            (calcInfo.valInCalc.balance *
                (calcInfo.valInCalc.risk.type == 0 ? (calcInfo.valInCalc.risk.value / 100) : (calcInfo.valInCalc.risk.value / (calcInfo.valInCalc.balance / 100)) / 100) / calcInfo.valInCalc.stopLoss) / 10
        );
        if (calcInfo.valInCalc.pul.val != calcInfo.inst[calcInfo.valInCalc.inst.type].lastVal) {
            calcInfo.otpValues.lot = calcInfo.otpValues.lot * calcInfo.valInCalc.askprice;
        }
        calcInfo.otpValues.minus = (calcInfo.valInCalc.balance *
            (calcInfo.valInCalc.risk.type == 0 ? (calcInfo.valInCalc.risk.value / 100) : (calcInfo.valInCalc.risk.value / (calcInfo.valInCalc.balance / 100)) / 100));
        calcInfo.otpValues.balance = calcInfo.valInCalc.balance - calcInfo.otpValues.minus;
        console.log(calcInfo.otpValues)

        renderResult();
    }

    function renderResult() {
        $('#calc-lot-otp').html(roundNumber(calcInfo.otpValues.lot, 2));
        $('#calc-minus-otp').html(roundNumber(calcInfo.otpValues.minus, 2));
        $('#calc-balance-otp').html(roundNumber(calcInfo.otpValues.balance, 2));
    }
    $('.calc-select').on('input', function() {
        checkAllValue();
    })
    $('.calc-input').on('input', function() {
        checkAllValue();
    })

    function checkAllValue() {
        calcInfo.valInCalc.inst.val = +$('[name="calc-instrument"]').val();
        calcInfo.valInCalc.inst.type = +$('[name="calc-instrument"] option:selected').attr('data-inst-i');

        calcInfo.valInCalc.pul.type = +$('[name="calc-pul"]').val();
        calcInfo.valInCalc.pul.val = $('[name="calc-pul"] option:selected').text();
        calcInfo.valInCalc.balance = +$('[name="calc-balance"]').val();

        calcInfo.valInCalc.stopLoss = +$('[name="calc-pips"]').val();

        calcInfo.valInCalc.risk.type = +$('[name="calc-risk-units"]').val();

        calcInfo.valInCalc.risk.value = +$('[name="calc-risk"]').val();

        calcInfo.valInCalc.askprice = +$('[name="calc-ask-price"]').val();

        console.log(calcInfo.valInCalc)

        $('#calc-row-ask-price label').html(`CURRENT ${calcInfo.inst[calcInfo.valInCalc.inst.type].title} ASK PRICE`)
        if (calcInfo.valInCalc.pul.val == calcInfo.inst[calcInfo.valInCalc.inst.type].lastVal) {
            calcRes();
            $('#calc-row-ask-price').fadeOut();
        } else {
            $('#calc-row-ask-price').fadeIn();
            if (calcInfo.valInCalc.askprice != 0) {
                calcRes();
            }
        }

        $('.calc-valute-unit').html(calcInfo.pul[calcInfo.valInCalc.pul.type].valuteChar)

    }

    function init() {

        $('#calc-instrument-inp').html(function() {
            let html = '';
            $.each(calcInfo.inst, function(i, v) {
                html += `<option value="${v.value}" data-inst-i="${i}">${v.title}</option>`
            })
            return html;
        })

        $('#calc-pul-inp').html(function() {
            let html = '';
            $.each(calcInfo.pul, function(i, v) {
                html += `<option value="${i}">${v.title}</option>`
            })
            return html;
        })


        checkAllValue();
        calcRes();
    }

    function roundNumber(num, scale) {
        if (!("" + num).includes("e")) {
            return +(Math.round(num + "e+" + scale) + "e-" + scale);
        } else {
            let arr = ("" + num).split("e");
            let sig = ""
            if (+arr[1] + scale > 0) {
                sig = "+";
            }
            let i = +arr[0] + "e" + sig + (+arr[1] + scale);
            let j = Math.round(i);
            let k = +(j + "e-" + scale);
            return k;
        }
    }
    init();
});
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
   if (!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
   } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
   }
});

const fixedNav = document.querySelector('.fixed-navbar')

menuBtn.addEventListener('click', () => {
   fixedNav.classList.toggle('left-0')
   menuBtn.classList.toggle('left-5')
})