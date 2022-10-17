import Alert from "@modules/common/icons/alert"

const PaymentTest = () => {
  return (
    <div className="w-full">
      <form>
  <script
    src="https://checkout.wompi.co/widget.js"
    data-render="button"
    data-public-key="pub_test_X0zDA9xoKdePzhd8a0x9HAez7HgGO2fH"
    data-currency="COP"
    data-amount-in-cents="7890000"
    data-reference="37DNKF84S92N1S"
    data-signature:integrity="37c8407747e595535433ef8f6a811d853cd943046624a0ec04662b17bbf33bf5"
    data-redirect-url="https://transaction-redirect.wompi.co/check"
    data-tax-in-cents:consumption="590000"
    data-tax-in-cents:vat="1290000"
    data-customer-data:email="lola@perez.com"
    data-customer-data:full-name="Lola Perez"
    data-customer-data:phone-number="3019777777"
    data-customer-data:phone-number-prefix="+57"
    data-customer-data:legal-id="123456789"
    data-customer-data:legal-id-type="CC"
    data-shipping-address:address-line-1="Carrera 123 # 4-5"
    data-shipping-address:address-line-2="apto 123"
    data-shipping-address:country="CO"
    data-shipping-address:city="Bogota"
    data-shipping-address:phone-number="3019988888"
    data-shipping-address:region="Cundinamarca"
    data-shipping-address:name="Pedro Perez"
    >
  </script>
</form>
    </div>
  )
}

export default PaymentTest
