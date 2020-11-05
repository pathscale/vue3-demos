<script>
import { VColumns, VColumn, VButton } from '@pathscale/vue3-ui'

export default {
  name: 'Component',
  components: { VColumns, VColumn, VButton }
}
</script>

<template>
  <div class="container">
    <v-columns>
      <v-column>
        <h3 class="title is-uppercase is-size-6">
          Bantuan
        </h3>
        <a href="/faq/topic/pembayaran">
          Pembayaran
        </a> <br />
        <a href="/faq/topic/pengiriman">
          Pengiriman
        </a> <br />
        <a href="/faq/topic/status-pesanan">
          Status Pesanan
        </a> <br />
        <a href="/faq/topic/pengembalian-produk">
          Pengembalian Produk
        </a> <br />
        <a href="/faq/topic/blibli-com-rewards">
          Blibli Rewards
        </a> <br />
        <a href="/faq/topic/belanja">
          Cara Berbelanja
        </a> <br />
        <a href="/faq/">
          Hubungi Kami
        </a> <br />
      </v-column>
      <v-column>
        <h3 class="title is-uppercase is-size-6">
          Customer Care
        </h3> <a href="#">
          Buka 24 jam setiap hari
        </a>
        <a href="#">
          <div class="cs__icon" style="background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9Ii0xIC0xIDI0IDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE5LjYgMTQuOGwtMi41LTEuNmMtLjktLjYtMi0uNC0yLjcuNS0uNi44LTEuMyAxLjUtMS45IDEuOC0xLjIuNC00LjMtMi42LTQuNS0yLjgtLjItLjItMy4yLTMuMy0yLjgtNC41LjItLjYgMS0xLjMgMS44LTEuOS44LS42IDEtMS44LjUtMi43TDUuNy45QzUuMiAwIDQtLjMgMy4xLjMgMS43IDEuMS4xIDIuOS42IDYuNSAxIDkgMi45IDEyLjQgNS41IDE1YzIuNiAyLjYgNiA0LjQgOC42IDQuOCAzLjYuNiA1LjMtMS4xIDYuMi0yLjUuNS0uOC4yLTItLjctMi41eiIgZmlsbD0iI0JEQkRCRCIvPjxwYXRoIGQ9Ik01LjcuOUM1LjIgMCA0LS4zIDMuMS4zbC0uNi4zIDMuOCA2Yy4yLS4yLjQtLjMuNi0uNS44LS42IDEtMS44LjUtMi43TDUuNy45ek0xOS42IDE0LjhsLTIuNS0xLjZjLS45LS42LTItLjQtMi43LjUtLjEuMi0uMy40LS41LjZsNiAzLjhjLjEtLjIuMy0uNC40LS42LjUtMSAuMi0yLjItLjctMi43eiIgZmlsbD0iIzg1ODU4NSIvPjwvZz48L3N2Zz4=&quot;) left center no-repeat;">&nbsp;
          </div>
          0804 1 871 871
        </a>
        <a href="#">
          <div class="cs__icon" style="background: url(&quot;data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9Ii0xIC0yIDIyIDIyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGwtcnVsZT0ibm9uemVybyIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTE0LjEgOS4yQzEzIDEwLjMgMTEuNiAxMSAxMCAxMWMtMS42IDAtMy0uNy00LjEtMS44bC01LTUuNmMtLjMtLjMtLjktLjEtLjkuM1YxNWMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjMuOWMwLS41LS42LS43LS45LS4zbC01IDUuNnoiIGZpbGw9IiM4NTg1ODUiLz48cGF0aCBkPSJNNy40IDcuOEM4LjEgOC42IDkgOSAxMCA5czEuOS0uNCAyLjYtMS4ybDUuMy02Yy4zLS4zLjEtLjgtLjMtLjgtMy4xIDAtMTItLjEtMTUuMSAwLS41IDAtLjcuNS0uNC44bDUuMyA2eiIgZmlsbD0iI0JEQkRCRCIvPjwvZz48L3N2Zz4=&quot;) left center no-repeat;">&nbsp;
          </div>
          customer.care@blibli.com
        </a>
        <v-button type="is-info">
          Saya butuh bantuan
        </v-button>
      </v-column>
      <v-column>
        <h3 class="title is-uppercase is-size-6">
          Info Blibli
        </h3> <a href="/faq/topic/tentang-blibli/">
          Tentang Blibli
        </a>
        <a href="/friends/">
          Blog Blibli Friends
        </a>
        <a href="/page/press-release/">
          Siaran Pers
        </a>
        <a href="/page/category/news-events/">
          Kabar Terbaru
        </a>
        <a href="/brands">
          Daftar Brand
        </a>
        <a href="https://careers.blibli.com/">
          Karir
        </a>
      </v-column>
      <v-column>
        <div class="cooperation">
          <h3 class="title is-uppercase is-size-6">
            Kerja Sama Dengan Blibli
          </h3> <a href="https://affiliate.blibli.com/affiliates/">
            Affiliate Program
          </a>
          <a href="/pages/merchant-corner">
            Jual di Blibli
          </a>
          <a href="/pages/b2b">
            B2B Program
          </a>
        </div>

        <div>
          <h3 class="title is-uppercase is-size-6">
            Blibli Family
          </h3>
          <a href="https://www.tiket.com/?utm_source=blibli&amp;utm_medium=footer">
            <img class="px-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAAAgCAMAAADHTHG4AAAAWlBMVEUAAAAAZNIAZNIAZNIAZNIAZNMAZNMAZNMAZNIAZNIAZNIAY9MAZNIAZNL+3QAAZNL+3QAAZNIAZNL/4gD+3QD+3QD+3QD+3QD+3QD+3QD+3QD+3QD+3QAAZNJsfX14AAAAHHRSTlMA59Muxqo6H4tIE2+bXuu3mH9TD944yHAiuINXiKGJ4QAAAspJREFUWMPNmNmWgjAMhru3YtncF/L+rzkmqVIdQRmdo/+FNSWQr0lsOYp3abfdb6qqWu0Pa/E1Om66XtVhKf5B3tZaTNGaoHKw7Vs4iivTAMgp/tvut/avJ6wFmOVB4ST9vH/T3dNq9yKVBgCV2QVi+XF/M0rFXC/my8F10Qr5GEuOVpC1f0u2xrG89nf9d1U3qMMrUNbASbUpT7EVzHOsGUhNoEFhhqK/9kftuxHtLkGiklJZx5YjK2q+pMIpUC1BzXH1QYG0pzgSztKiBgDXY7mUlhKSEFpdDAyy7sbUCFaEpIiWvbV0TPYlks6xKOTsguUl9/YcepU3WM0oVkVdT6s1IVhel2GLBsaSIENQWA4A26KbFdpQIINFMVdYilkdDlZ7HwDnfZ38MefLqhvVEakCPVVQjziyHHcIQODctWgTZyEoDTJr4RusOmXEcrpTMW3vzzV8WEXPVEk6USUuLyylkGmMIEnCcvewREs146fKgv0tfs2xtg+wNhzOXm3FUbCIiHrrTNnyvBrEUiFRiQVitQE1p+s5VvMAa8XByx6rzlJXIrCl7HGg8AiL5Wmx11pMwKKeN9lJllkc2PwFy/zGqsVnsegjcmNK7XWSEH8o4uJ9RSxK7q4CaDLT9JaPwy0/jgU6x2KQmucjDyhHeJomJm0QbnCDGMTiMNK0F6zU7R5HlZJnywX+EGPmP2E75cjeSIerlGQ5QI4BLBryg2XRvwamMjrolfvPnzx8eP9u2+zwqduWJkWGVd5ilWesyGky596xbGsDrLTORcJ6+qi2kGSp63srx5plWECjs0rRGRdqdPHRYrLY5luiOXlEbK3ef8KLjbMSQNbp/hlZ1vElGc7wKkUt5Vy8qHX35GtgUdxY/6vtyO7wSTVD/b4TH1XzlVRCHO5VcCk+rvXqlmorvkLHHKxqPl7APmOH/Qr/SNo0xzfU7wcp/LRALguNIgAAAABJRU5ErkJggg==" alt="tiket.com" />
          </a>
          <a href="https://www.garasi.id/?utm_source=blibli&amp;utm_medium=footer">
            <img class="px-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAyCAMAAAAN+PdDAAAAOVBMVEUAAADsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzbsGzYi0R6VAAAAE3RSTlMA/g0j0uuzWJSFdxffZzrCo0owPbajKQAAAsNJREFUWMPtVtly5CAMHIkbzOX//9iVZMzgZGprppLdJ/eDh0M0rQaUPG7cuHHjFSLYxz/EDmB+m1OpZ7sChB8TYsGl5wHK2e4kHy+xJdja+kf0aQO99ADAnR0NENdQp0Gwf3aEAEsyBvQpOQNsi/x9sLOAD+CuItNwRwV9ZQrMbEKmr3rD9KBNH7qW8D4UpwYM/Yy33I/I52PfMJ3FNV4X12TRHOIccxNjnxMcX2kqfbG/W/sqm0phMmHXbE9xgYxwuEGd9BzvRZjh33XBmk7x2pRBkIb523L1D3GRBhXHzIvaYB4SrnIDsT/58wZHXJ/W0kh+hjfxrMjmioUpL7NZ1F/g2mZ2usBlA2Nkrsj12gKyywQcN3CtBmKWFuGV2nwM403UlRyjMDgSNB8Ex/oGdpgmDx/N5QZaVqnoayVGn660cSWVcyhKxQcd5ZoIEtNrNcrVRgwiPNAgR6cpv8vedT+FZaYVMehZs0FJ2gQrhiUzpCpiSpwzb+pa6WwQMmHg9JI1mXb7Cr2fDysRq6Bzw2KnyVFAPGwobh7lCj3PFAqVJVo8YE9O/lZ52GmwblYhK9mxWFWkp8XYxlsZakUiEbejY++cqhzlZzWp/FU0XyMZ7XJ5LICjSCPKoo09knuRKn2Tpy2YSNE0S5hQFHW+MhWFUeHKm4rLgTY/L6fjRV2UsKpsiE5RMxzHfVJX+cozyy18K7Vp7zl6q7W2PrqCwm8oTBFN45yTYlM35lRs0QQPe0WPptqIV1ZUxUXf6gZbbSH3NRO75twWD6KYJ6RZa6/QdfwitvQcmqXczCE3vf4jLBCb8qnUBI5FSiRy4ypWLBDHpty/oNTBz0SRlCbMDodC9d0CwpT7HnAvawl6bQGscj+FPLKLBW5Y8ELu50AzHsG04Cr3p3BH6Tnf+CFX/eI/csZ0+SW5Oz5u3Lhx43/gD6f3F/25evpXAAAAAElFTkSuQmCC" alt="garasi.id" />
          </a>
          <a href="https://www.blibli.com/promosi/trv-corporate-service?appsWebview=true">
            <img class="px-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABLCAMAAAD3cHEvAAAAh1BMVEX///8AgNjvhh0Sidr0+vzd7/jwmD6w2PH88+clktv64sl1u+ii0e/vji3t9vuNxuvO5vVGo+Dzsm4xmN39+fP41rGCwen2zKBZrONksuT1xpW93vLxoE3G4/T66tXyqV06nd5Pp+H0wIn0un3ghytNgp2ghFzNhTgigb9fg497g3mwzdzEzMfULndCAAADCklEQVRYw+2Wi5KbMAxFJQQYBzBgIEBeJNm+2///vsp22E23bgen05m20zMJOML3gkSQgf/82xzzlpDkWMTwCPsWF6iCcCa8p00gjLjBb6EagrjgayjoGrb4PW2APkEfW1jNiCi3hK9ogi6AapU/XIMKGRlDcnHSUSR5UAkaNEzuz3QulLsoKYnadXUgtBQ2HZdUgzfUCr16nfW+CbsTyfIAxGAQbeidTO7lUOMLOaxCmamc6/cGFayDLrfSTa8MxNpOAIY4Z8W3BjUEICQrmm8MKECuRrQk9wZNwOnpue5HXPjw5YF2QPGzwac3GawkxxeKm8HH95Feff14x9kavH0fRdEJVlLgPa09O6MDVoRt3ryU7tObyFBmEIKSaHn7LrrRQxhHq3YndwmE8tmqFw4dBHO906cZPMCTRx/G1aMPYyiNfu7gYTaHqLzCL5F18BdR53m+3QNUvK8SDqhtcx45AByIARI+bB7W8dxU8Y+fwgnk7ZUmoWUxcA254ujy7iQTr0ErtoiJxEo0OEKLVIjRaBH5J5yNQYE4iYqw8RpwlLCWWJvx3rXxhqNIRLFCicSuk+s5ic9AViOSkjjlErcVti5KbDChKDA3Q9wDQyh8BgwVrgZTXOEZGGENBE4X3CPFiEdnUHhrUAgFbFAQCqNUtsO2wEIiOidIrKzc+nv018DANahQgiK8KBBGwcIRsTIGnMYR1JmP/9QgZplNiRDbmA1s2YyBkjaIwrscXcDQUg0VyRgKU42R8yCCmBpISIJ785IC1pHUytNw6wR+D9kOYNMDDBmPB9sO9NMJ7GADTL9jOjfTR1ee4JBCFnWsSM28cnftwZCmwAxPpX4yBrtoAz7mISvLrD/AzWBTdktjSp1i2WkNPna613rQ18WgS9OrtdDDVS8G9mDmX+hOqe57zZOcAdOn2qYy7MruxUDPfTqAD06gK0t4NsjA5rNL57kcnIH1m2eulQ/N0+f52aAvtdWl5tYcFgM77EpvGbPMfpnuZHPqXc4mYEenzmwyt/nPf/404l/7fAVTyycjJzwwZgAAAABJRU5ErkJggg==" alt="promowisata" />
          </a>
        </div>
      </v-column>
      <v-column>
        <div>
          <h3 class="title is-uppercase is-size-6">
            Ikuti Kami
          </h3>
          <div>
            <a href="https://www.facebook.com/bliblidotcom">
              <img class="px-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAA/1BMVEUAAABFUIROWY9OWY9OWY9OWY9OWY82QnBOWY9OWY9OWY9OWY9OWY9OWY9OWY9OWY83Q3FOWY82QnA2QnBCToA2QnA2QnA2QnA2QnA2QnE3QnE3Q3E3Q3E3Q3FNWY////82QnDR0dEzQG719vlbZIfKys11fqjT0tI3Q3ExPm5EUILNztBjbJBia4xHUnz09Pfm5+7Ly85tdp91fJg4RHL39/fc3uZ0fafd4OfQ097V1dTHyMvAwce9vsWJjqRkbZ1VX4RIU3xBTHg8SHSkqbqPlrieorJ4gJ1eaJZCTYFKVX3t7vDDx9S0t7+tr7qQlrCAh6iBh59sdZ5YYo9MVn51q2qlAAAAHnRSTlMAA9k3/One3MGrlolsKxrzOUL79fPqw66Zi28sHERe6R0qAAABmElEQVQ4y22T13aCQBBAWUCx964hC4qAPYHYNbbY0sv/f0t2UYFB7wucmQuzZYaxQdFIkI3zfJwNRqKI8YK4kJ8Xz/D+EOdRYmGfCPCFY+48FxCvCHBOPsmKN2CT9vdOHhrcub71/+dBnTJ4tPjZW1WsdaAwfX/pVS1emw8W0y8aDSNawEe/792feBpLKkFSZ790L6QIClF1UHWEyXSqSJJSO5B4CDFRPxXqttCcL/6Wc5UIuCGK/igT4aEw12RdN6ggaw2RjzBBEQi9hbxu7TYSFTAxggwLhX5Hrk1U9SQQg2XiUBh29LY0vgjYzDC8W+i+bVbyYrt9vwhYg8JoZZKYiQ1bwLDEaE2jsv6tXoQ0XGTvc7fGS8P4sAXBu83hUm83VckukacH5d1FU7KFVMl71H0oCGVwWddCATnXDQV1diT5bMLVMF1KddSR2xNFUWaGRoQiclpu37KomXhVIxxpPldxN+0ByxQSPz+wkIBt39AwQLiDg+M1cgnP6EEjW6zcGt6GiSkpoZCwhxeOf0bDaSFfKjvpf6O5bmFqpYRNAAAAAElFTkSuQmCC" alt="facebook" />
            </a>
            <a href="https://twitter.com/bliblidotcom">
              <img class="px-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABJlBMVEUAAABamMxlotllotllotllotllotllotllotllotllotllotllotllotllotk6fKU6fKZlotlIibc6fKU6fKU6fKY7faY7faY7faY7faY7fac7fac8fac8fqhRkcE8fadlotk6fKX////R0dE4e6VjodnX19b5+fjT0tI9fqhioNZUk8RLi7pno9r8/f7M4PPJzdBIharz+Pysy+iix+iQvORvqNthn9W3xMtcj7D7/f74+vzq8vry9PbH3fGx0Oycw+eJuOKCsNpqpdp0qdioxdeWt9amv9XN0NLBytCRts2WsMBtnrx8o7vh7fjf7PfG3fHW4+zE2Oudwt9+sd+vytp2qdadu9W6x9K6xMurvMaZssFZlcCApLpxm7VolrNik7FSiaxLCxVPAAAAIHRSTlMAAtk3/PPp3sGrlolsKxr420L+6t/DrpmLbzo4LBv9ROZEJ6AAAAGkSURBVDjLbZPnWsIwFIaTtohAEdxMbUqrRWXvvTe49/b+b0IyCoHyPvwh35uekzYHLIBu2SHYJMkmOGQ3BOtA0WmXFIZkd4pryo5rS1lhy7XD5+K2YmFbXOa7grIBYXexn+ZWQ2T1zedbq5A+oGt1Vcc/hgviAqT/WMxcbL8M+l2l+0zOMi8CnWRbMxOj+/rJiBEZDV5nl/ifEwK3nazXy408fnh7GMEYyUkKG3Y3kCVSIaHGE62OrmfOIoTRN4rODUkGDtpZRlXVdCLbumfCF0LEcAD2DpppFVOpUWH4o1FDADaSx+oq5ZwKyZKGiGEDEi2RjfOCUUxpiBgnTFDyt3FemCBGlJVQ9FyaE5K/GhM8ZpP6Y3UpGB9RxPDiY1JyN2UmGMU/zRSOgMy61JXcNRWMt9Ii9/jZq85nG4lqnArvOGcchNjH6jzcVVRMrTjDJzQ5hubnLnxOx72n3nia0rh8P7C8MIW9eaLNQRw+yF25iyu0zmGYv7RWwxvkr73V8J7yg2M1DoOW0eONfV94w/CahufgOMAPLz/+hT2P98gfWsb/5VlxZjOccIkAAAAASUVORK5CYII=" alt="twitter" />
            </a>
            <a href="http://www.youtube.com/user/bliblidotcom">
              <img class="px-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABAlBMVEUAAADJHxTSIhXIHhTSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXSIhXKHxSoFBGoFBGvFhKoFBGpFBGoFBGpFBGpFBGpFBGqFRGqFRGqFRGqFRHSIhWoFBH////R0dHSHxKnEQ7R09PMIBSyFxLPyciyPz388vHShYPTeXK9cnDcUkiqGRb3+PjV19fU1NTojIbZQTbRzs7Djo23TkvTMCT9+vn29vb66ObxvbnmurnisK/urKfHm5rSh4XmiYLPgYDQXlivMC7TJxvLHRGyFA/y6+vx5+fOw8LNv77Nvr7Gnp7Sn5vNkIzgaF+9VFK5NjHSOzCrIh+iexlzAAAAH3RSTlMAAjca+/Pp3tnYwauWiWwrQvPq39rZwq2Yi245NyxDv8HCJwAAAVlJREFUOMt1k+digjAURhMQQaZ722ALjtpWbevoto5q937/V5GECJFx/n6HS3JzL/CAhq5IAkKCpOgGBEEgp4oJREmIKhdQeC2J9khqPJtzMgohc36eTqEIUmnvezcPG7QGL6MYZHIOqKFYNIh/QM9/tAe9C+cUUN14+j2/cJifEJZT11AhMESSX95eNTGDoY0Zff4RQTSATvr39NB0uT4/JNhfLdJTHShugRsqDLCAef9d40QBEhHOjkl8d/88pEKnu8E1JCCwQq//M+vYVLDajiEAxAqPltWffOwEExthoTse7QRsBH8xGb/aXgXHyAQP+UIPSQUzH3vNtxURSrGNGvdNTDWu1bMVyXMN/7GWi57D4pQw+TcJZeg/93pjMbh5tsYOTKttBqlAd+TijCLvDW2kUah7Yx9pFA7YxQkbxXpo9VgjW+Ejl5cauXIN0iC8/pl8qdrw4y11eW2Bh2D3zgAAAABJRU5ErkJggg==" alt="youtube" />
            </a>
            <a href="https://www.instagram.com/bliblidotcom">
              <img class="px-1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAABJlBMVEUAAABiIqlsJ7NsJ7NlI6xlJKxsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NsJ7NQGpZRGpdsJ7NaH6BQGpZQGpZQGpZQGpZQGpZQGpZQGpZQGpZRGpdRGpdsJ7NQGZZOF5VSHJdqJbLOzNDEsdtvRaX59/ymlL2MV8T+/v/T0tNcIKJxL7VnOaHz8PbR0NHLyM+kh8epl791T6j28/nj2+7TxeSymtGketCypcOET7uagriPc7N/WLJ5UK92TK1qPaZZJ5pXI5pVIpn6+P317/rdze7Jxc2snMKGTMB1NLjf1ey9nt3Arte/rNe+tsm+tci7sce1qMSMabWBW7SEY659WqtlLKhtQaVaHaJjNJ/Xyue7q8u1qcSVa79/RrmZgbh5VamBAUJnAAAAHnRSTlMAA9n8Kxrz6d7Bq5aJbDg22zlC/fv16t/DrpmLb0SvtGnUAAABt0lEQVQ4y4WTZ1vCMBCAO9kguCeX0lIELdM92csBgkz3//8TJiGWAlXfL22fe3u5JHecCS/5PYJDFB2Cxy/x3Dx8wOsSwwzR5Q3MKbLPGZ7B6ZOt8SV3eAH30jS+LIRtEJbN/1k8YsIMlkN2T8LNxj7mAvNxyFaRaf0++nF4Vq3oejmZUFU1/fo+UXxkLwEnjd/Hj040TXvMxmKx83QqQw1nACfw0vxn8bvrosIo5J5SXVqIl+ckF3lpVo+uEQBCioKQke3m0m8DYrgkzi+SBI3KSREA8pmH+tX4K1UvnNeMETZEP+ehK+zrmgLwfBxPJhLtfn+oxNQoOsCGhxNMAeWPy6c30Uu1PUZUAGwInGMqZOKnCq7iMnHFBGw4ONEUFE2/IYVG1azCBGz8I8DKn0tg1uyKbBlTIWizzVYOwBS2bA7KwC8lfFBEWN21OWryzKU7BcBsSLaXVcKX1QPCNv/bdX+WSHw9ZG2Yl6Su67Rhap0ejcMOb225wfAWE8UYBaBsyjNNGxmhH4ASDM21feQArAT3rIOzaGyGFkbPaqzvyHbDy4zVje3Qwnyz8Y+srAW3di3j/w3NFXZYkHBftQAAAABJRU5ErkJggg==" alt="instagram" />
            </a>
          </div>
        </div> <div class="apps-support push-title">
          <h3 class="title is-uppercase is-size-6">
            Unduh Aplikasi Kami
          </h3> <div>
            <a href="https://itunes.apple.com/id/app/blibli.com/id1034231507?l=id&amp;amp;mt=8">
              <img class="px-1" src="data:image/png;base64,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" alt="app-store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=blibli.mobile.commerce">
              <img class="px-1" src="data:image/png;base64,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" alt="google-play" />
            </a>
            <a href="https://appgallery.cloud.huawei.com/ag/n/app/C101765925?channelId=web&amp;detailType=0">
              <img class="px-1" src="data:image/png;base64,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" alt="huawei-app-gallery" />
            </a>
          </div>
        </div>
      </v-column>
    </v-columns>
  </div>
</template>

