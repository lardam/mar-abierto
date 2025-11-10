'use client';

import ArrowIcon from '@/assets/icons/arrow';

export default function SubscriptionForm() {
  return (
    <form className="subscription-form">
      <input
        id="subscription-input"
        name="email"
        type="mail"
        className="input-form"
        placeholder="Ingresá tu mail"
      />
      <button className="btn">
        <p>suscribirme</p>
        <ArrowIcon />
      </button>
    </form>
  );
}
