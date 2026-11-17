/**
 * conversions.js — Motor Determinístico de Rastreamento Google Ads & OCT
 * Chassi v2.1.0 · AR FRI Climatização e Ar Condicionado · Indaiatuba, Salto e Itu / SP
 * Compilado automaticamente por builder/build-site.js — NÃO EDITE MANUALMENTE.
 */

(function () {
  'use strict';

  const GOOGLE_ADS_ID = "AW-18416024511";
  const GOOGLE_ADS_WHATSAPP_CONVERSION = "AW-18416024511/gD9VCPnrk-ocEL_3uM1E";
  const GOOGLE_ADS_PHONE_CONVERSION = "AW-18416024511/x8QFCN7rk-ocEL_3uM1E";
  const WHATSAPP_NUMBER = "5519997871301";
  const DISPLAY_PHONE = "(19) 99787-1301";
  const EMPRESA_PREFIX = "AF";
  const ENDPOINT_REGISTRO_CLIQUE = "https://hrobytuiaxoflsezgpce.supabase.co/functions/v1/registrar-clique-ads";

  const CHARSET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';

  const MESSAGES = {
  "home": "Olá! Vim pelo site, gostaria de um atendimento para ar-condicionado em Indaiatuba, Salto ou Itu.",
  "conserto": "Olá! Vim pelo site, gostaria de um atendimento para conserto de ar-condicionado.",
  "instalacao": "Olá! Vim pelo site, gostaria de um atendimento para instalação de ar-condicionado.",
  "higienizacao": "Olá! Vim pelo site, gostaria de um atendimento para limpeza e higienização de ar-condicionado.",
  "pmoc": "Olá! Vim pelo site, gostaria de um atendimento para contrato de PMOC ou laudo técnico de ar-condicionado."
};
  const ROUTE_SERVICE_MAP = {
  "/conserto-ar-condicionado": "conserto",
  "/instalacao-ar-condicionado": "instalacao",
  "/limpeza-higienizacao-ar-condicionado": "higienizacao",
  "/pmoc-ar-condicionado": "pmoc"
};
  const PILL_SERVICE_MAP = {
  "Conserto": "conserto",
  "Instalação": "instalacao",
  "Higienização": "higienizacao",
  "PMOC": "pmoc"
};

  function setCookie(name, val, days) {
    days = days || 30;
    try {
      const exp = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = name + '=' + encodeURIComponent(val) + ';expires=' + exp + ';path=/;SameSite=Lax';
    } catch (e) {}
  }

  function getCookie(name) {
    try {
      const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
      return match ? decodeURIComponent(match[1]) : null;
    } catch (e) {
      return null;
    }
  }

  function getGclAw() {
    const raw = getCookie('_gcl_aw');
    if (!raw) return null;
    const parts = raw.split('.');
    if (parts.length >= 3) {
      return parts.slice(2).join('.');
    }
    return raw;
  }

  const urlParams = new URLSearchParams(window.location.search);
  const queryGclid = urlParams.get('gclid');
  const queryWbraid = urlParams.get('wbraid');
  const queryGbraid = urlParams.get('gbraid');

  if (queryGclid) {
    setCookie('_gclid', queryGclid, 30);
    setCookie('oct_gclid', queryGclid, 30);
  }
  if (queryWbraid) {
    setCookie('_wbraid', queryWbraid, 30);
    setCookie('oct_wbraid', queryWbraid, 30);
  }
  if (queryGbraid) {
    setCookie('_gbraid', queryGbraid, 30);
    setCookie('oct_gbraid', queryGbraid, 30);
  }

  ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (utm) {
    const val = urlParams.get(utm);
    if (val) {
      setCookie('oct_' + utm, val, 30);
      try {
        localStorage.setItem('oct_' + utm, val);
      } catch (e) {}
    }
  });

  const activeGclid = queryGclid || getCookie('_gclid') || getCookie('oct_gclid') || getGclAw() || null;
  const activeWbraid = queryWbraid || getCookie('_wbraid') || getCookie('oct_wbraid') || null;
  const activeGbraid = queryGbraid || getCookie('_gbraid') || getCookie('oct_gbraid') || null;

  const hasAdsTraffic = Boolean(activeGclid || activeWbraid || activeGbraid || urlParams.has('test'));

  function generateProtocolCode() {
    let code = '';
    const cryptoObj = window.crypto || window.msCrypto;
    if (cryptoObj && cryptoObj.getRandomValues) {
      const bytes = new Uint8Array(4);
      cryptoObj.getRandomValues(bytes);
      for (let i = 0; i < 4; i++) {
        code += CHARSET[bytes[i] % CHARSET.length];
      }
    } else {
      for (let i = 0; i < 4; i++) {
        code += CHARSET[Math.floor(Math.random() * CHARSET.length)];
      }
    }
    return '#' + EMPRESA_PREFIX + '-' + code;
  }

  function getOrGenerateProtocol() {
    if (!hasAdsTraffic) {
      return null;
    }

    try {
      const sessionSaved = sessionStorage.getItem('oct_protocol');
      if (sessionSaved && sessionSaved.startsWith('#' + EMPRESA_PREFIX + '-')) {
        return sessionSaved;
      }
    } catch (e) {}

    const cookieSaved = getCookie('_oct_code') || getCookie('oct_protocol');
    if (cookieSaved && cookieSaved.startsWith('#' + EMPRESA_PREFIX + '-')) {
      try {
        sessionStorage.setItem('oct_protocol', cookieSaved);
      } catch (e) {}
      return cookieSaved;
    }

    const newProtocol = generateProtocolCode();

    try {
      sessionStorage.setItem('oct_protocol', newProtocol);
    } catch (e) {}
    setCookie('_oct_code', newProtocol, 30);
    setCookie('oct_protocol', newProtocol, 30);

    return newProtocol;
  }

  const activeProtocol = getOrGenerateProtocol();

  if (hasAdsTraffic) {
    try {
      sessionStorage.setItem(
        'oct_traffic_attr',
        JSON.stringify({
          gclid: activeGclid,
          wbraid: activeWbraid,
          gbraid: activeGbraid,
          codigo: activeProtocol
        })
      );
    } catch (e) {}
  }

  function registrarCliqueAds(origem) {
    if (!hasAdsTraffic && !activeProtocol) {
      return;
    }

    const nav = typeof window !== 'undefined' && window.navigator ? window.navigator : (typeof navigator !== 'undefined' ? navigator : null);
    const userAgent = nav ? nav.userAgent : '';
    const payload = JSON.stringify({
      empresa: EMPRESA_PREFIX,
      codigo: activeProtocol,
      protocolo: activeProtocol,
      origem: origem || 'whatsapp_click',
      gclid: activeGclid,
      wbraid: activeWbraid,
      gbraid: activeGbraid,
      url_origem: window.location.href,
      user_agent: userAgent,
      criado_em: new Date().toISOString()
    });

    let sent = false;
    if (nav && typeof nav.sendBeacon === 'function') {
      try {
        const blob = new Blob([payload], { type: 'application/json' });
        sent = nav.sendBeacon(ENDPOINT_REGISTRO_CLIQUE, blob);
      } catch (e) {
        sent = false;
      }
    }

    if (!sent && typeof fetch === 'function') {
      fetch(ENDPOINT_REGISTRO_CLIQUE, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
        keepalive: true
      }).catch(function () {});
    }
  }

  function dispararConversaoWhatsApp(onDone) {
    var done = false;
    function finish() {
      if (!done) {
        done = true;
        if (onDone) onDone();
      }
    }
    if (typeof window.loadGtag === 'function') {
      window.loadGtag();
    }
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: GOOGLE_ADS_WHATSAPP_CONVERSION,
          value: 1.0,
          currency: 'BRL',
          transaction_id: activeProtocol || undefined,
          transport_type: 'beacon',
          event_callback: finish
        });
      } else {
        finish();
      }
    } catch (e) {
      finish();
    }
    setTimeout(finish, 1200);
  }

  function dispararConversaoTelefone(onDone) {
    var done = false;
    function finish() {
      if (!done) {
        done = true;
        if (onDone) onDone();
      }
    }
    if (typeof window.loadGtag === 'function') {
      window.loadGtag();
    }
    try {
      if (typeof window.gtag === 'function' && !GOOGLE_ADS_PHONE_CONVERSION.includes('PENDENTE')) {
        window.gtag('event', 'conversion', {
          send_to: GOOGLE_ADS_PHONE_CONVERSION,
          transport_type: 'beacon',
          event_callback: finish
        });
      } else {
        finish();
      }
    } catch (e) {
      finish();
    }
    setTimeout(finish, 1200);
  }

  function detectDefaultService() {
    const cleanPath = window.location.pathname.replace(/\/$/, '').replace(/\.html$/i, '') || '/';
    return ROUTE_SERVICE_MAP[cleanPath] || 'home';
  }

  function buildWhatsAppUrl(serviceKey, customMsg) {
    const sKey = serviceKey || detectDefaultService();
    const baseMsg = customMsg || MESSAGES[sKey] || MESSAGES.home;
    const finalMsg = activeProtocol ? (baseMsg + ' [Protocolo: ' + activeProtocol + ']') : baseMsg;
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(finalMsg);
  }

  function setupTrackingListeners() {
    const deviceRadios = document.querySelectorAll('.device-pill input[name="device"], input[name="device"]');
    deviceRadios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        const contactBtn = document.querySelector('#contato a[data-track="whatsapp"]');
        if (contactBtn) {
          const svc = PILL_SERVICE_MAP[this.value] || detectDefaultService();
          contactBtn.setAttribute('data-service', svc);
          contactBtn.setAttribute('href', buildWhatsAppUrl(svc));
        }
      });
    });

    const quickForm = document.getElementById('quick-form');
    if (quickForm) {
      quickForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const nameInput = document.getElementById('form-name');
        const neighInput = document.getElementById('form-neighborhood');
        const name = nameInput ? nameInput.value.trim() : '';
        const neighborhood = neighInput ? neighInput.value.trim() : '';
        const selectedRadio = document.querySelector('input[name="device"]:checked');
        const deviceSelected = selectedRadio ? selectedRadio.value : 'Aparelho';
        const svc = PILL_SERVICE_MAP[deviceSelected] || detectDefaultService();

        let customMsg = 'Olá! Vim pelo site, gostaria de um atendimento. Meu nome é ' + name + ', resido em ' + neighborhood + ' e preciso de conserto/serviço para: ' + deviceSelected + '.';
        if (activeProtocol) {
          customMsg += ' [Protocolo: ' + activeProtocol + ']';
        }
        const waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(customMsg);

        registrarCliqueAds('whatsapp_form_' + svc);
        if (window._gtagReady) {
          dispararConversaoWhatsApp();
          window.open(waUrl, '_blank', 'noopener,noreferrer');
        } else {
          dispararConversaoWhatsApp(function () {
            window.location.href = waUrl;
          });
        }
      });
    }

    document.querySelectorAll('.faq-item').forEach(function (item) {
      item.addEventListener('click', function () {
        const wasActive = item.classList.contains('active');
        document.querySelectorAll('.faq-item').forEach(function (i) {
          i.classList.remove('active');
        });
        if (!wasActive) item.classList.add('active');
      });
    });

    const waButtons = document.querySelectorAll('a[data-track="whatsapp"], button[data-track="whatsapp"]');
    waButtons.forEach(function (btn) {
      const service = btn.getAttribute('data-service') || detectDefaultService();
      const targetUrl = buildWhatsAppUrl(service);

      if (btn.tagName === 'A') {
        const currentHref = btn.getAttribute('href');
        if (!currentHref || currentHref === '#' || currentHref === '#contato' || currentHref.includes('wa.me')) {
          btn.setAttribute('href', targetUrl);
          btn.setAttribute('target', '_blank');
          btn.setAttribute('rel', 'noopener noreferrer');
        }
      }

      btn.addEventListener('click', function (e) {
        const currentService = btn.getAttribute('data-service') || service;
        const currentUrl = buildWhatsAppUrl(currentService);

        registrarCliqueAds('whatsapp_' + currentService);

        if (btn.tagName === 'BUTTON') {
          e.preventDefault();
          if (window._gtagReady) {
            dispararConversaoWhatsApp();
            window.open(currentUrl, '_blank', 'noopener,noreferrer');
          } else {
            dispararConversaoWhatsApp(function () {
              window.location.href = currentUrl;
            });
          }
          return;
        }

        if (btn.getAttribute('target') === '_blank' || window._gtagReady) {
          btn.setAttribute('href', currentUrl);
          dispararConversaoWhatsApp();
          return;
        }

        e.preventDefault();
        dispararConversaoWhatsApp(function () {
          window.location.href = currentUrl;
        });
      });
    });

    const phoneButtons = document.querySelectorAll('a[data-track="phone"], button[data-track="phone"], a[href^="tel:"]');
    phoneButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        registrarCliqueAds('telefone_ligacao');
        if (window._gtagReady) {
          dispararConversaoTelefone();
          return;
        }
        if (btn.tagName === 'A' && btn.getAttribute('href') && btn.getAttribute('href').startsWith('tel:')) {
          const telUrl = btn.getAttribute('href');
          e.preventDefault();
          dispararConversaoTelefone(function () {
            window.location.href = telUrl;
          });
        } else {
          dispararConversaoTelefone();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTrackingListeners);
  } else {
    setupTrackingListeners();
  }

  const publicApi = {
    GOOGLE_ADS_ID: GOOGLE_ADS_ID,
    GOOGLE_ADS_WHATSAPP_CONVERSION: GOOGLE_ADS_WHATSAPP_CONVERSION,
    GOOGLE_ADS_PHONE_CONVERSION: GOOGLE_ADS_PHONE_CONVERSION,
    WHATSAPP_NUMBER: WHATSAPP_NUMBER,
    DISPLAY_PHONE: DISPLAY_PHONE,
    EMPRESA_PREFIX: EMPRESA_PREFIX,
    ENDPOINT_REGISTRO_CLIQUE: ENDPOINT_REGISTRO_CLIQUE,
    protocol: activeProtocol,
    activeProtocol: activeProtocol,
    hasAdsTraffic: hasAdsTraffic,
    buildWhatsAppUrl: buildWhatsAppUrl,
    registrarCliqueAds: registrarCliqueAds,
    dispararConversaoWhatsApp: dispararConversaoWhatsApp,
    dispararConversaoTelefone: dispararConversaoTelefone,
    handleWhatsAppClick: function (serviceType, customText) {
      registrarCliqueAds('whatsapp_' + (serviceType || 'direct'));
      const url = buildWhatsAppUrl(serviceType, customText);
      if (window._gtagReady) {
        dispararConversaoWhatsApp();
        window.location.href = url;
      } else {
        dispararConversaoWhatsApp(function () {
          window.location.href = url;
        });
      }
    },
    handlePhoneClick: function () {
      registrarCliqueAds('telefone_ligacao');
      dispararConversaoTelefone();
    }
  };

  window._oct_tracker = publicApi;
  window.handleWhatsAppClick = publicApi.handleWhatsAppClick;
  window.handlePhoneClick = publicApi.handlePhoneClick;
  window.dispararConversaoWhatsApp = publicApi.dispararConversaoWhatsApp;
  window.dispararConversaoTelefone = publicApi.dispararConversaoTelefone;
})();
